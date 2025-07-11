const semana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

const numeros = [1, 2, 3, 4, 5];

const booleanos = [true, false];

const arrayMixto = ['alejandra', 18, false];
console.log(semana);
console.log(semana[3]);
console.log(numeros[4]);
console.log(arrayMixto[2]);

booleanos.push(true);
console.log(booleanos);

semana.splice(5, 1);
console.log(semana);

console.log(semana.filter((s) => s === 'miércoles'));

const usuarios = [
	{ id: 1, nombre: 'Ana' },
	{ id: 2, nombre: 'Luis' },
	{ id: 3, nombre: 'Carlos' },
];

//objetos: clave valor

console.log(usuarios[2].nombre);
console.log(usuarios[0]);
