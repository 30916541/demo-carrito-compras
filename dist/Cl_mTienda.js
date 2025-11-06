export default class Cl_mTienda {
    constructor() {
        this.productos = [];
    }
    agregarProducto({ producto, callback, }) {
        const nombre = this.productos.find((d) => d.nombre === producto.nombre);
        if (nombre) {
            callback("El producto ya existe");
            return;
        }
        this.productos.push(producto);
        callback(false);
    }
    listarProductos() {
        let productos = [];
        this.productos.forEach((d) => {
            productos.push(d.toJSON());
        });
        return productos;
    }
}
