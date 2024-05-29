export default class Impuesto{

    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(montoBruto){
        return this._montoBrutoAnual = ()=> {
           return montoBruto;
    }
    }

    get deducciones(){
        return this._deducciones;
    }
    set deducciones(deduccion){
        return this._deducciones= ()=> {
            return deduccion;
    }
    }
}