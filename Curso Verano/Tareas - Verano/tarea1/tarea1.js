const formulario = document.getElementById('formulario-info');
const inputNombre = document.getElementById('nombre-forms');
const inputEmail = document.getElementById('email-forms');
const fraseFav = document.getElementById('frase-fav');
const selectFecha = document.getElementById('select-fecha');

formulario.addEventListener('submit', function (event) {
	event.preventDefault();
	const infoNombre = inputNombre.value;
	const infoEmail = inputEmail.value;
	const infoFrase = fraseFav.value;
	const infoSelect = selectFecha.value;
	console.log(
		'su nombre es' +
			infoNombre +
			', su email es ' +
			infoEmail +
			', su frase fav es ' +
			infoFrase +
			'y su fecha de nacimiento es ' +
			infoSelect
	);
});
