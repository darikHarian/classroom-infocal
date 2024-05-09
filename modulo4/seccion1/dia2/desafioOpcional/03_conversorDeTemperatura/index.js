let celsius = prompt('Ingrese la temperatura en Celsius');
let kelvin, fahrenheit;

celsius = parseInt(celsius);

kelvin = celsius + 273.15;
fahrenheit = (celsius * (9 / 5)) + 32;

let temperatura = document.getElementById('temperatura');

temperatura.innerHTML = 
    `
        <h2>Temperaturas</h2>
        <p><b>Grados Celcius:</b> ${celsius}°C</p>
        <p><b>Grados Kelvin:</b> ${kelvin}°K</p>
        <p><b>Grados Fahrenheit:</b> ${fahrenheit}°F</p>
    `