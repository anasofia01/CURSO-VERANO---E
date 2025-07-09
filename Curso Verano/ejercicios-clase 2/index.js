function prueba1() {
	console.log('holi');
}

prueba1();

const perritoNombre = 'Amapola';

function prueba2(mascota) {
	console.log(mascota);
}

prueba2('Miranda');

const animalesAcuaticos = ['delfín', 'tiburón', 'pulpo', 'medusa', 'caballito de mar', 'ballena', 'estrella de mar'];

const contarAnimales = animalesAcuaticos.map(function (animal) {
	if (animal === 'delfín') {
		prueba3(animal, '1');
	} else {
		prueba4(animal);
	}
});

function prueba3(animalesMar, param2) {
	console.log(animalesMar);
	console.log(param2);
}

function prueba4(noEsAnimal) {
	console.log('No es delfín, es:' + noEsAnimal);
}
