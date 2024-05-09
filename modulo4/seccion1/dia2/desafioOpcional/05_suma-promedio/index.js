let n1 = parseInt(prompt('Por favor ingrese el primer número'));
let n2 = parseInt(prompt('Por favor ingrese el segundo número'));
let n3 = parseInt(prompt('Por favor ingrese el tercer número'));
let n4 = parseInt(prompt('Por favor ingrese el cuarto número'));
let n5 = parseInt(prompt('Por favor ingrese el quinto número'));

let suma = n1 + n2 + n3 + n4 + n5;
let promedio = suma / 5;

let resultados = document.getElementById('resultados');

resultados.innerHTML = 
    `
        <h2>Resultados</h2>
        <h3>Los números ingresados fueron: ${n1}, ${n2}, ${n3}, ${n4} y ${n5}</h3>
        <h3>La suma de los números ingresados es: ${suma}</h3>
        <h3>El promedio de los números ingresados es: ${promedio}</h3>
    `