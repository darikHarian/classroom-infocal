import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

let impuesto = new Impuesto(70000, 12);
let cliente1 = new Cliente("gatojuanito", impuesto);
console.log(cliente1);

//console.log("El sueldo liquido es :" + t1.calcularSueldoLiquido());
cliente1.calcularImpuesto();