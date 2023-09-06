function handlePokemonClick(pokemonId) {
    
    localStorage.setItem('selectedPokemonId', pokemonId);

    
    window.location.href = 'pokemon.jsp';
}

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonContainer = document.querySelector('.pokemon-cards');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const itemsPerPage = 20;
let offset = 0;

async function loadPokemon(offset) {
    try {
        const response = await fetch(`${apiUrl}?offset=${offset}&limit=${itemsPerPage}`);
        const data = await response.json();

        pokemonContainer.innerHTML = '';

        for (const pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            card.innerHTML = `
            <a href="pokemon" onclick="handlePokemonClick(${pokemonData.id})">
                <div class="card-img">
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                </div>
                <div class="card-info">
                    <span class="pokemon-id">#${pokemonData.id}</span>
                    <h3>${pokemonData.name}</h3>
                    <div class="card-types">
                        ${pokemonData.types.map(type => `<span class="${type.type.name}">${type.type.name}</span>`).join('')}
                    </div>
                </div>
            </a>
            `;

            pokemonContainer.appendChild(card);
        }

        prevButton.disabled = !data.previous;
        nextButton.disabled = !data.next;
    } catch (error) {
        console.error('Error al cargar los Pokémon:', error);
    }
}

prevButton.addEventListener('click', () => {
    if (offset >= itemsPerPage) {
        offset -= itemsPerPage;
        loadPokemon(offset);
    }
});

nextButton.addEventListener('click', () => {
    offset += itemsPerPage;
    loadPokemon(offset);
});

loadPokemon(offset);





