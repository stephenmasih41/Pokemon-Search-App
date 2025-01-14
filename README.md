# Pokémon Search App

## Description
This is a simple web application that allows users to search for a Pokémon by name or ID. It fetches data from the [PokéAPI from freeCodeCamp](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon) and displays various attributes of the Pokémon, including its name, ID, stats, height, weight, and types. Users can also view the Pokémon's image. If the user inputs a non-existent Pokémon, an alert message will be shown.

## Features
- Search for Pokémon by name or ID.
- Display the Pokémon's name, ID, height, weight, and stats (HP, attack, defense, special attack, special defense, and speed).
- Display the Pokémon's image.
- Show the Pokémon's types.
- Clear data on invalid search or error.

## Technologies Used
- **HTML**: Basic structure of the application.
- **CSS**: Simple styling for the layout.
- **JavaScript**: Handles the functionality, including fetching data from the PokéAPI, processing the data, and updating the DOM.


## How It Works
- The user enters a Pokémon name or ID in the input field and clicks the "Search" button.
- The app sends a request to the PokéAPI and retrieves data related to the requested Pokémon.
- If the Pokémon is found, the app displays its name, ID, stats, image, and types.
- If the Pokémon is not found, an alert message will appear.

## Example Workflow
1. **Search for Pikachu**:
    - Enter "Pikachu" into the search input.
    - The app fetches the data and displays:
      - Name: PIKACHU
      - ID: #25
      - Weight: 60
      - Height: 4
      - HP: 35
      - Attack: 55
      - Defense: 40
      - Special Attack: 50
      - Special Defense: 50
      - Speed: 90
      - Image: A sprite of Pikachu.
      - Types: Electric

2. **Search for Invalid Pokémon (e.g., "Red")**:
    - An alert with the message "Pokémon not found" will be shown.

## Code Explanation
- **Event Listener**: The `searchBtn` listens for a click event, retrieves the value from the `search-input`, and passes it to the `pokemon()` function.
- **API Request**: The `pokemon()` function sends a `GET` request to the PokéAPI and processes the returned JSON data to display it in various elements.
- **Error Handling**: If an error occurs or the Pokémon is not found, the `clear()` function is called, and an alert message is shown.


