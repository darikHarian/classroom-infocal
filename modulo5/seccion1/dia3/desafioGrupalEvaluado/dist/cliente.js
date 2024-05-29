export default class Cliente {

    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    calcularImpuesto() {
        let calculoImpuesto = this._impuesto.montoBrutoAnual - this._impuesto.deducciones;

        console.log(`El impuesto que debe pagar:  ${this._nombre}  es ${calculoImpuesto}`);
    }

}