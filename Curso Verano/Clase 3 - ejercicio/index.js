const parrafoP = document.querySelector('#parrafoId');
console.log(parrafoP);

const parrafoPClass = document.querySelectorAll('.parrafo');
console.log(parrafoPClass);

const parrafoId = document.getElementById('parrafoId');
console.log(parrafoId);

const parrafoClass = document.getElementsByClassName('parrafo');
console.log(parrafoClass);

const button = document.getElementById('btnClick');
button.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('Me has clickeado');
});

const forms = document.getElementById('formulario');
const inputEmail = document.getElementById('exampleInputEmail1');
const inputPassword = document.getElementById('exampleInputPassword1');
forms.addEventListener('submit', function (event) {
	event.preventDefault();
	const data = inputEmail.value;
	const data2 = inputPassword.value;
	console.log('Has enviado el formulario', data, data2);
});

document.addEventListener('scroll', function (event) {
	event.preventDefault();
	console.log(window.scrollY);
});

const formularioFocus = document.getElementById('inputFocus');
console.log(formularioFocus);
formularioFocus.addEventListener('focus', function (event) {
	event.preventDefault();
	console.log('Se ha parado en el input');
});

document.addEventListener('keydown', function (event) {
	event.preventDefault();
	console.log(event.code);
});
