const apiUrl = 'https://pokeapi.co/api/v2/pokemon';


function loadPokemonDetails(pokemonId) {
    fetch(`${apiUrl}/${pokemonId}`)
        .then(response => response.json())
        .then(pokemonData => {
            
            document.querySelector('.poke-name').textContent = pokemonData.name;
            document.querySelector('.poke-image img').src = pokemonData.sprites.front_default;
            
            
            const abilitiesList = document.querySelector('.poke-abilities');
            abilitiesList.innerHTML = '';
            for (const ability of pokemonData.abilities) {
                const listItem = document.createElement('li');
                listItem.textContent = ability.ability.name;
                abilitiesList.appendChild(listItem);
            }

            
            const characteristicsList = document.querySelector('.poke-characteristics');
            characteristicsList.innerHTML = '';
            for (const stat of pokemonData.stats) {
                const listItem = document.createElement('li');
                listItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
                characteristicsList.appendChild(listItem);
            }
        })
        .catch(error => {
            console.error('Error al cargar los detalles del Pokémon:', error);
        });
}

const storedPokemonId = localStorage.getItem('selectedPokemonId');


if (storedPokemonId) {
    loadPokemonDetails(storedPokemonId);
} else {
    console.error('No se encontró un ID de Pokémon en el almacenamiento local.');
}

