//Neto
let producto1 = 230;
let producto2 = 450;
let producto3 = 1200;
let producto4 = 100;

const precioConIVA = (producto) => {
    let precioTotal;
    const iva = 19;
    //IVA
    let precioIVA = (producto * iva) / 100;

    //Total Producto
    return precioTotal = producto + precioIVA;
};

console.log(`$${precioConIVA(producto1)}`);
console.log(`$${precioConIVA(producto2)}`);
console.log(`$${precioConIVA(producto3)}`);
console.log(`$${precioConIVA(producto4)}`);