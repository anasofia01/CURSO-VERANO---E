const inputNombre = document.getElementById('nombrePersona');
const inputEdad = document.getElementById('edadPersona');
const formulario = document.getElementById('forms');

formulario.addEventListener('submit', function (event) {
	event.preventDefault();
	const nombre = inputNombre.value;
	const edad = inputEdad.value;
	alert('La persona ' + nombre + ' tiene ' + edad + ' años');
});
