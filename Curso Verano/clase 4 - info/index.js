const formulario = document.getElementById('form-local');
const input = document.querySelector('.mi-input');
const btnDelete = document.getElementById('delete');
console.log(btnDelete.dataset.ejemplo);

formulario.addEventListener('submit', function (event) {
	event.preventDefault();
	const inputInfo = input.value;
	console.log(inputInfo);

	localStorage.setItem('data', inputInfo);
});

const nombresMascotas = ['Amapola', 'Miranda'];
localStorage.setItem('mascotas', nombresMascotas);
const obtuveInfo = localStorage.getItem('mascotas');
console.log(obtuveInfo);

nombresMascotas.push('Constantino');
console.log(nombresMascotas);
localStorage.setItem('mascotas', nombresMascotas);

btnDelete.addEventListener('click', function (event) {
	event.preventDefault();
	localStorage.removeItem('data');
});

localStorage.clear();
