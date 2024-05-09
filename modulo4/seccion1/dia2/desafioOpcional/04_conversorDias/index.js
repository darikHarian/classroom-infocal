// Recibimos la cantidad de días totales
let n = prompt('Ingrese la cantidad de días totales');

// Inicializamos las variables
let year, modYear, week, modWeek, day, stringYear, stringWeek, stringDay;

// Parseamos n como un entero
n = parseInt(n);

// Dividimos n por 365 y redondeamos hacia abajo para obtener la cantidad de años
year = n / 365;
year = Math.floor(year);

// Si hay menos de 1 año:
if (year == 0) {
    // El módulo del año es igual a los días totales ingresados
    modYear = n;

    // Se divide el módulo del año por 7 y se redondea hacia abajo para obtener el número de semanas
    week = modYear / 7;
    week = Math.floor(week);
    
    // Si hay menos de 1 semana:
    if (week == 0) {
        // Los días son iguales al módulo del año
        day = modYear;
    // Si hay 1 o mas semanas:
    } else {
        // El módulo de la semana es igual al módulo del año entre el número de semanas multiplicado por 7
        modWeek = modYear % (week * 7);
        // Los días son iguales al módulo de la semana
        day = modWeek;
    };

// Si hay 1 o mas años
} else {
    // El módulo del año es igual al módulo del número total de días ingresados entre el número de años multiplicado por 365
    modYear = n % (year * 365);

    // El número de semanas es igual al módulo del año dividido por 7 y se redeondea hacia abajo
    week = modYear / 7;
    week = Math.floor(week);

    // Si hay menos de 1 semana:
    if (week == 0) {
        // Los días son iguales al módulo del año
        day = modYear;
    // Si hay 1 o mas semanas:
    } else {
        // El módulo de la semana es igual al módulo del año entre el número de semanas multiplicado por 7
        modWeek = modYear % (week * 7);
        // Los días son iguales al módulo de la semana
        day = modWeek;
    };
};

// Si la cantidad de años es igual a 1, se utiliza el singular de la palabra año
if (year == 1) {
    stringYear = 'año';
// Sino, se usa el plural de la palabra año
} else {
    stringYear = 'años';
};

// Si la cantidad de semanas es igual a 1, se utiliza el singular de la palabra semana
if (week == 1){
    stringWeek = 'semana';
// Sino, se usa el plural de la palabra semana
} else {
    stringWeek = 'semanas';
};

// Si la cantidad de días es igual a 1, se utiliza el singular de la palabra día
if (day == 1) {
    stringDay = 'día';
// Sino, se usa el plural de la palabra días
} else {
    stringDay = 'días';
};

// Se selecciona el elemento div con el id "Coversion"
let conversion = document.getElementById('conversion');

// Se muestra la información dentro del div seleccionado
conversion.innerHTML =
    `
        <h2>Días totales ingresados: ${n}</h2>
        <h3>En total hay ${year} ${stringYear}, ${week} ${stringWeek} y ${day} ${stringDay}</h3>
    `