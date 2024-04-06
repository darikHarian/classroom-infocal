// Obteniendo los elementos de las asignaturas
let r1n1 = document.getElementById('ramo1Nota1');
let r1n2 = document.getElementById('ramo1Nota2');
let r1n3 = document.getElementById('ramo1Nota3');
let pr1 = document.getElementById('promedio1');

let r2n1 = document.getElementById('ramo2Nota1');
let r2n2 = document.getElementById('ramo2Nota2');
let r2n3 = document.getElementById('ramo2Nota3');
let pr2 = document.getElementById('promedio2');

let r3n1 = document.getElementById('ramo3Nota1');
let r3n2 = document.getElementById('ramo3Nota2');
let r3n3 = document.getElementById('ramo3Nota3');
let pr3 = document.getElementById('promedio3');

// Pidiendo al usuario las notas y asignándolos a los elementos correspondientes
r1n1.innerHTML = prompt('Ingrese la nota 1 de la asignatura HTML');
r1n2.innerHTML = prompt('Ingrese la nota 2 de la asignatura HTML');
r1n3.innerHTML = prompt('Ingrese la nota 3 de la asignatura HTML');

r2n1.innerHTML = prompt('Ingrese la nota 1 de la asignatura CSS');
r2n2.innerHTML = prompt('Ingrese la nota 2 de la asignatura CSS');
r2n3.innerHTML = prompt('Ingrese la nota 3 de la asignatura CSS');

r3n1.innerHTML = prompt('Ingrese la nota 1 de la asignatura JavaScript');
r3n2.innerHTML = prompt('Ingrese la nota 2 de la asignatura JavaScript');
r3n3.innerHTML = prompt('Ingrese la nota 3 de la asignatura JavaScript');

// Parseando
r1n1 = parseFloat(r1n1.innerText);
r1n2 = parseFloat(r1n2.innerText);
r1n3 = parseFloat(r1n3.innerText);

r2n1 = parseFloat(r2n1.innerText);
r2n2 = parseFloat(r2n2.innerText);
r2n3 = parseFloat(r2n3.innerText);

r3n1 = parseFloat(r3n1.innerText);
r3n2 = parseFloat(r3n2.innerText);
r3n3 = parseFloat(r3n3.innerText);

// Promediando
let p1 = (r1n1 + r1n2 + r1n3)/3;
let p2 = (r2n1 + r2n2 + r2n3)/3;
let p3 = (r3n1 + r3n2 + r3n3)/3;

// Redondeando
p1 = p1.toFixed(2);
p2 = p2.toFixed(2);
p3 = p3.toFixed(2);

// Asignando resultados de los promedios a los elementos correspondientes
pr1.innerHTML = p1;
pr2.innerHTML = p2;
pr3.innerHTML = p3;