let mResults = document.getElementById('mResults');
let fResults = document.getElementById('fResults');

const getNumber = () => {
    let n = prompt('Por favor, ingrese un número entre 1 y 20');
    n = Number(n);
    while (n < 1 || n > 20) {
        n = prompt('Error:\nNúmero fuera del rango\nPor favor, ingrese un número entre 1 y 20');
    };
    return n;
};

const mult = (n) => {
    let printMResults = "";
    for (let i = 0; i < n; i++) {
        let result = (i+1) * n;
        console.log(`${i+1} x ${n} = ${result}`);
        printMResults = printMResults +
        `
            ${i+1} x ${n} = ${result}<br>
        `;
        mResults.innerHTML = printMResults;
    };
};

const fact = (n) => {
    let printFResults = "";
    let factorial = 1;
    for (let i = 1; i < (n+1); i++) {
        console.log(`Factorial de ${i} es ${factorial}`);
        printFResults = printFResults + 
        `
            <li>Factorial de ${i} es :${factorial}</li>
        `; 
        factorial = factorial + (factorial * i);
        fResults.innerHTML = printFResults;
    };
};

let n = getNumber();

mult(n);
fact(n);