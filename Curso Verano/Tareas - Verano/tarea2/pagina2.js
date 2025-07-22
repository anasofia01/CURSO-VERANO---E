const btnChange = document.getElementById('btn-pagina2');
const formulario = document.getElementById('formulario-filter');
const selectFilter = document.getElementById('select-filter');
const inputNumber = document.getElementById('number-filter');
const containerCards = document.getElementById('cards');

btnChange.addEventListener('click', function (event) {
	event.preventDefault();

	alert('Estas yendo a la página 1');
	window.location.href = './pagina1.html';
});

formulario.addEventListener('submit', async function (event) {
	event.preventDefault();

	const selectInfo = selectFilter.value;
	const inputInfo = inputNumber.value;

	const getInfo = await fetch('https://randomuser.me/api/?gender=' + selectInfo + '&results=' + inputInfo);

	if (!getInfo.ok) {
		alert('Falló');
	}

	const data = await getInfo.json();
	const resultsInfo = data.results;

	resultsInfo.forEach((item) => {
		containerCards.innerHTML += `
			<div class="card" style="width: 18rem;">
  			<img src="${item.picture.large}" class="card-img-top" alt="${item.name.first}">
  			<div class="card-body">
    			<h5 class="card-title">Nombre: ${item.name.first} ${item.name.last}</h5>
    			<p class="card-text">Ciudad: ${item.location.city}</p>
    			<p class="card-text">Correo: ${item.email}</p>
					<p class="card-text">Número telefónico: ${item.phone}</p>
  			</div>
			</div>
		`;
	});
});
