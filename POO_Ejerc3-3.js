// POO Ejercicio 3-3
// Importo las clases
const Producto  = require("./Producto.js");
const Cliente   = require("./Cliente.js");   
/// defino los objetos 
// productos
const producto1 = new Producto();
const producto2 = new Producto();
// clientes
const cliente1  = new Cliente();
const cliente2  = new Cliente();
////
// Asigno valores a los atributos de cada uno
// Productos
producto1.setNombreProducto("YerbaMatex1Kg");
producto1.setPrecioProducto(1800);
producto2.setNombreProducto("Azucarx1Kg");
producto2.setPrecioProducto(900);
// clientes
cliente1.setNombreCliente("Juan");
cliente1.setMontoComprado(0);
cliente2.setNombreCliente("Pedro");
cliente2.setMontoComprado(0);
///
/// Imprime los objetos y sus valores...
//
console.log("Producto 1:");
console.log("Nombre:", producto1.getNombreProducto());
console.log("Precio:", producto1.getPrecioProducto());
console.log("Vendido a:", producto1.getVendidoA());

console.log("Producto 2:");
console.log("Nombre:", producto2.getNombreProducto());
console.log("Precio:", producto2.getPrecioProducto());
console.log("Vendido a:", producto2.getVendidoA());

console.log("Cliente 1:");
console.log("Nombre:", cliente1.getNombreCliente());
console.log("Monto Comprado:", cliente1.getMontoComprado());

console.log("Cliente 2:");
console.log("Nombre:", cliente2.getNombreCliente());
console.log("Monto Comprado:", cliente2.getMontoComprado());

///////////////////////////////
// Interacciones 
// Ahora Juan compra 1Kg de Yerba y 1 Kg de Azucar
cliente1.setMontoComprado(producto1.getPrecioProducto());
cliente1.setMontoComprado(producto2.getPrecioProducto());
console.log("cliente1: ", cliente1.getNombreCliente() +", Monto Comprado= ", cliente1.getMontoComprado());
// ahora Pedro compra 1 Kg de yerba 
cliente2.setMontoComprado(producto1.getPrecioProducto());
console.log("cliente2: ", cliente2.getNombreCliente() + ", Monto Comprado= ", cliente2.getMontoComprado());
// 
// Actualiza la base de datos de producto a quien fue vendido
// producto1
producto1.setVendidoA(cliente1.getNombreCliente());
producto1.setVendidoA(cliente2.getNombreCliente());
console.log("producto1: ", producto1.getNombreProducto() + ", Vendido a= ", producto1.getVendidoA());
// producto2
producto2.setVendidoA(cliente1.getNombreCliente());
console.log("producto2: ", producto2.getNombreProducto() + ", Vendido a= ", producto2.getVendidoA());
//
/* Fin */





