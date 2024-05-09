alert('Debe ingresar 2 números diferentes y mayores que cero')
let n1 = prompt('Por favor, ingrese el primer número');

while (n1 <= 0 || n1 == "") {
    alert('Error, ingrese un número mayor que cero');
    n1 = prompt('Por favor, ingrese el primer número');
};

let n2 = prompt('Por favor, ingrese el segundo número');

while (n2 <= 0 || n2 == "" || n2 == n1) {
    alert('Error, ingrese un número mayor que cero y diferente al primer número ingresado');
    n2 = prompt('Por favor, ingrese el segundo número');
};

n1 = parseInt(n1);
n2 = parseInt(n2);

let suma = n1 + n2;
let resta = n1 - n2;
let division = n1 / n2;
let multiplicacion = n1 * n2;
let modulo = n1 % n2;

let resultados = document.getElementById('resultados');

resultados.innerHTML = 
    `
        <h2>Resultados</h2>
        <p>El resultado de la suma es: ${suma}</p>
        <p>El resultado de la resta es: ${resta}</p>
        <p>El resultado de la división es: ${division}</p>
        <p>El resultado de la multiplicación es: ${multiplicacion}</p>
        <p>El resultado del módulo es: ${modulo}
    `