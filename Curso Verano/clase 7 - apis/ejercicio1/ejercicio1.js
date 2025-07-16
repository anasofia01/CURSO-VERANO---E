const formulario = document.getElementById('formulario-filter');
const inputText = document.getElementById('text-filter');
const select = document.getElementById('select-filter');
const cardsContainer = document.getElementById('cards');

formulario.addEventListener('submit', async function (event) {
	event.preventDefault();
	const inputInfo = inputText.value;
	const selectInfo = select.value;

	let urlFetch = '';

	if (selectInfo === 'nombre') {
		urlFetch = 'https://rickandmortyapi.com/api/character/?name=' + inputInfo;
	}
	if (selectInfo === 'estado') {
		urlFetch = 'https://rickandmortyapi.com/api/character/?status=' + inputInfo;
	}
	if (selectInfo === 'especie') {
		urlFetch = 'https://rickandmortyapi.com/api/character/?species=' + inputInfo;
	}
	if (selectInfo === 'tipo') {
		urlFetch = 'https://rickandmortyapi.com/api/character/?type=' + inputInfo;
	}
	if (selectInfo === 'genero') {
		urlFetch = 'https://rickandmortyapi.com/api/character/?gender=' + inputInfo;
	}

	const getCharactersFilter = await fetch(urlFetch);
	if (!getCharactersFilter.ok) {
		alert('Falló');
	}

	const data = await getCharactersFilter.json();
	const getData = data.results;

	getData.forEach((personaje) => {
		cardsContainer.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
        <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">${personaje.species}</p>
        </div>
      </div>
    `;
	});
});
