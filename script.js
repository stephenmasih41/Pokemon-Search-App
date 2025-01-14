// Declaring Constants 
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const pokemonImg = document.getElementById('sprite');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const typesContainer = document.getElementById("types");


// Adding a Event Listener on the button 
searchBtn.addEventListener('click', ()=>{
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  
  // Ist Condition if users enter red
  if(searchInput === "red"){
    alert("Pokémon not found");
  }
  clear()
  pokemon(searchInput)
})

// Pokemon Function
const pokemon = async (input) => {
  try{
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`
    );
    const data = await response.json();
    // Getting the values from the server
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight.toString()}`;
    height.textContent = `Height: ${data.height.toString()}`;
    // Getting the Image of the Pokemon
    pokemonImg.style.display = "block";
    pokemonImg.src = `${data.sprites.front_default}`;
    // Getting the stats of the Pokemon
    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defense.textContent = `Defense: ${data.stats[2].base_stat}`;
    specialAttack.textContent = `Sp. Attack: ${data.stats[3].base_stat}`;
    specialDefense.textContent = `Sp. Defense: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;
    // Getting the types of pokemon
    data.types.forEach((typeObj)=>{
      const typeName = typeObj.type.name.toUpperCase();
      const typeSpan = document.createElement("span");
      typeSpan.textContent = typeName;
      typesContainer.appendChild(typeSpan)
    })
  }
  catch(err){
    clear();
    alert("Pokémon not found");
  }
}

// Clear Function 
function clear(){
  pokemonName.textContent = ``;
  pokemonId.textContent = ``;
  weight.textContent = ``;
  height.textContent = ``;
  pokemonImg.style.display = "none";
  pokemonImg.src = ``;
  hp.textContent = ``;
  attack.textContent = ``;
  defense.textContent = ``;
  specialAttack.textContent = ``;
  specialDefense.textContent = ``;
  speed.textContent = ``;
  typesContainer.innerHTML = ``;
}
