console.log('holi');

const animal = '1';
let fruta = 'coco';

if (animal == 1) {
	fruta = 'fresa';

	console.log('Es un toro');
} else if (animal === 'pez') {
	console.log('Es un pez');
} else {
	console.log('no es ningun animal');
}

console.log(fruta);

for (let index = 0; index < 10; index++) {
	// console.log(index);
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const contarNumeros = numeros.map(function (numero) {
	console.log(numero);
});

const nombres = ['Karina', 'Karol', 'Karen'];

nombres.forEach((nombre) => {
	console.log(nombre);
});

/* switch (animal) {
	case 'toro':
		console.log('es un toro');
		break;
	case 'vaca':
		console.log('es una vaca');
		break;
	default:
		console.log('es un pez');
		break;
} */
