const btnChange = document.getElementById('btn-pagina2');

btnChange.addEventListener('click', function (event) {
	event.preventDefault();

	alert('Estas yendo a la página 1');
	window.location.href = './pagina1.html';
});
