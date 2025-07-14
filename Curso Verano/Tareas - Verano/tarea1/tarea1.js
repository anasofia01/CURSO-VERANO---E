const formulario = document.getElementById('formulario-info');
const inputNombre = document.getElementById('nombre-forms');
const inputEmail = document.getElementById('email-forms');
const fraseFav = document.getElementById('frase-fav');
const selectFecha = document.getElementById('select-fecha');

const tablaInfo = document.getElementById('info-tabla');
const filasTabla = tablaInfo.querySelectorAll('tr');
let filaActual = 0;

formulario.addEventListener('submit', function (event) {
	event.preventDefault();
	const infoNombre = inputNombre.value;
	const infoEmail = inputEmail.value;
	const infoFrase = fraseFav.value;
	const infoSelect = selectFecha.value;

	const infoUsuario = {
		nombre: infoNombre,
		email: infoEmail,
		frase: infoFrase,
		fecha: infoSelect,
	};

	localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario));
	const obtenerInfo = JSON.parse(localStorage.getItem('infoUsuario'));
	alert('Se han registrado los datos');

	filasTabla[filaActual].innerHTML = `
    <td>${obtenerInfo.nombre}</td>
    <td>${obtenerInfo.email}</td>
    <td>${obtenerInfo.frase}</td>
    <td>${obtenerInfo.fecha}</td>
  `;

	filaActual++;
	formulario.reset();
});
