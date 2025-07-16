const formsFilter = document.getElementById('forms-filter');
const inputFilter = document.getElementById('input-filter');
const containerCard = document.getElementById('card-filter');

formsFilter.addEventListener('submit', async function (event) {
	event.preventDefault();
	const inputInfo = inputFilter.value;
	const searchCharacters = await fetch('https://rickandmortyapi.com/api/character/?name=' + inputInfo);

	if (!searchCharacters.ok) {
		alert('falló');
	}

	const data = await searchCharacters.json();
	const getData = data.results;

	getData.forEach((item) => {
		containerCard.innerHTML += `
      <div class="card mb-5 g-col-4" style="width: 18rem;">
  			<img src="${item.image}" class="card-img-top" alt="${item.name}">
  			<div class="card-body">
    			<h5 class="card-title">${item.name}</h5>
    			<p class="card-text">Fecha de creación: ${item.created}</p>
    			<p class="card-text">Especie: ${item.species}</p>
  			</div>
			</div>
    `;
	});
});
