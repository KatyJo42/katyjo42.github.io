const getRandomPokemon = async () => {
    try {
        // Fetch a random Pokémon from the API by generating a random ID between 1 and 898 (total number of Pokémon)
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150) + 1)
        const data = await response.json()
        console.log(`Random Pokémon: ${data.name}`) // Log the Pokémon name to the console
    } catch (error) {
        console.error('Error fetching Pokémon:', error)
    }
}

// Call the function to get a random Pokémon when needed
getRandomPokemon()