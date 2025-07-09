const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const selectOperaciones = document.getElementById('selectOperaciones');
const forms = document.getElementById('formularioCalculadora');
const resultadoCalculadora = document.getElementById('resultado');

forms.addEventListener('submit', function (event) {
	event.preventDefault();
	const input1 = numero1.value;
	const input2 = numero2.value;
	console.log(typeof input1, typeof input2);
	const select = selectOperaciones.value;
	const resultado = valoresCalculadora(input1, input2, select);
	resultadoCalculadora.innerHTML = resultado;
});

function valoresCalculadora(valor1, valor2, operacion) {
	let resultado = 0;
	if (operacion === 'suma') {
		resultado = Number(valor1) + Number(valor2);
	} else if (operacion === 'resta') {
		resultado = valor1 - valor2;
	} else if (operacion === 'multiplicación') {
		resultado = valor1 * valor2;
	} else if (operacion === 'división') {
		resultado = valor1 / valor2;
	} else {
		resultado = 0;
	}

	return resultado;
}
