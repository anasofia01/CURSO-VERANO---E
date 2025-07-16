const container = document.getElementById('container-cards');

async function characters() {
	const getCharacters = await fetch('https://rickandmortyapi.com/api/character');

	if (!getCharacters.ok) {
		alert('Falló');
	}

	const data = await getCharacters.json();
	const resultsInfo = data.results;

	resultsInfo.forEach((item) => {
		console.log(item);
		container.innerHTML += `
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
}

characters();
