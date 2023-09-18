class Producto {
    #nombreProducto = "producto 1";        // puede haber muchos procuctos
    #precioProducto = 100;                 // valor numérico
    #vendidoA       = ["nombre de cliente"]; // a uno o mas clientes
    
    setNombreProducto (nombre) {
        this.#nombreProducto = nombre;   // se podría hacer una para poner en cero
    }

    getNombreProducto() {
        return this.#nombreProducto;
    }

    setPrecioProducto (precio) {
        this.#precioProducto = precio;   // se podría hacer una para poner en cero
    }

    getPrecioProducto() {
        return this.#precioProducto;
    }

    setVendidoA (nombre) {
        this.#vendidoA.push(nombre) ;   // spueden ser varios
    }

    getVendidoA() {
        return this.#vendidoA;          // devuelve un array
    }

}

module.exports = Producto;
