const button = document.getElementById('btnPrueba');
const texto = document.getElementById('parrafoQuemado');
button.addEventListener('click', function (event) {
	event.preventDefault();
	texto.innerHTML = 'Has clickeado';
});
