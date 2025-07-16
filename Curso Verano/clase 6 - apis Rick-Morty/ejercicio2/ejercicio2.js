const container = document.getElementById('container-location');

async function locations() {
	const getLocations = await fetch('https://rickandmortyapi.com/api/location');

	if (!getLocations.ok) {
		alert('Falló');
	}

	const data = await getLocations.json();
	const getData = data.results;

	getData.forEach((item) => {
		container.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Tipo: ${item.type}</h6>
          <p class="card-text">Dimensión: ${item.dimension}</p>
          <p class="card-text">Residentes: ${item.residents[2]}</p>
        </div>
      </div>
    `;
	});
}

locations();
