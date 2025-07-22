const btnChange = document.getElementById('btn-pagina');
const container = document.getElementById('container-cards');

btnChange.addEventListener('click', function (event) {
	event.preventDefault();

	alert('Estas yendo a la página 2');
	window.location.href = './pagina2.html';
});

async function peopleApi() {
	const getPeople = await fetch('https://www.swapi.tech/api/people/');

	if (!getPeople.ok) {
		alert('Falló');
	}

	const data = await getPeople.json();
	const resultsInfo = data.results;

	resultsInfo.forEach(async (item) => {
		const getDataUrl = await fetch(item.url);
		const personData = await getDataUrl.json();
		const properties = personData.result.properties;

		container.innerHTML += `
			<div class="card mb-5 g-col-4" style="width: 18rem;">
  			<div class="card-body">
    			<h5 class="card-title">${item.name}</h5>
          <h6 class="card-title">Género: ${properties.gender}</h6>
    			<p class="card-text">Fecha de nacimiento: ${properties.birth_year}</p>
          <p class="card-text">Tono de piel: ${properties.skin_color}</p>
  			</div>
			</div>
		`;
	});
}

peopleApi();
