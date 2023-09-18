class Cliente {
    #nombreCliente = "un nombre";
    #montoComprado = 0;           // acumulado por cliente  

    setNombreCliente (nombre) {
        this.#nombreCliente = nombre;
    }

    getNombreCliente() {
        return this.#nombreCliente;
    }

    setMontoComprado (monto) {
        this.#montoComprado += monto;   // se podría hacer una para poner en cero
    }

    getMontoComprado() {
        return this.#montoComprado;
    }
}

module.exports = Cliente;


