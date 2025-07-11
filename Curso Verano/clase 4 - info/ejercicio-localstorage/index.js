const frutas = ['mango', 'mandarina', 'coco', 'fresa'];
localStorage.setItem('dataFrutas', frutas);
const getFrutas = localStorage.getItem('dataFrutas');
console.log(getFrutas);

frutas.splice(3, 1);
localStorage.setItem('dataFrutas', frutas);
const getFrutas2 = localStorage.getItem('dataFrutas');
alert('Se acaba de actualizar el array: ' + getFrutas2);
