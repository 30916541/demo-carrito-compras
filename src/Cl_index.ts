import Cl_controlador from "./Cl_controlador.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_index {
    public modelo: Cl_mTienda;
    public vista: Cl_vTienda;

    constructor() {
        this.modelo = new Cl_mTienda();
        this.vista = new Cl_vTienda();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}