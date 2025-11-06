import Cl_mProducto, {iProducto} from "./Cl_mProducto.js";

export default class Cl_mTienda {
    private productos: Cl_mProducto[] = [];

    agregarProducto({
        producto,
        callback,
    }: {
        producto: Cl_mProducto;
        callback: (error: string | false) => void;
    }): void {

        const nombre = this.productos.find(
            (d) => d.nombre === producto.nombre
        );
        if (nombre) {
            callback("El producto ya existe");
            return;
        }
        this.productos.push(producto);
        callback(false);
    }

    listarProductos(): iProducto[] {
        let productos: iProducto[] = [];
        this.productos.forEach((d) => {
            productos.push(d.toJSON());
        });
        return productos;
    }
}
