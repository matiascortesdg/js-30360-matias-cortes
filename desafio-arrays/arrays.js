// Desafio - Incorporar Arrays

//Ejemplo Vinos Tintos y Blancos

//Vinos Tintos
const productosVinoTinto = [
    {nombre: "Malbec", precio: 450},
    {nombre: "Cabernet", precio: 500},
    {nombre: "Syrah", precio: 400},
    {nombre: "Tempranillo", precio: 550},
];

//Vinos Blancos
const productosVinoBlanco = [
    {nombre: "Torrontes", precio: 650},
    {nombre: "Chardonnay", precio: 750},
    {nombre: "Sauvignon", precio: 450},
    {nombre: "Blend", precio: 500},
];

let vinoTinto = prompt("Ingrese el Vino Tinto deseado");
let vinoBlanco = prompt("Ahora ingrese el Vino Blanco");

let vinoTintoSeleccionado = productosVinoTinto.find(x => x.nombre === vinoTinto);
let vinoBlancoSeleccionado = productosVinoBlanco.find(x => x.nombre === vinoBlanco);

let precioTotal = `el precio de los productos elegidos es $ ${vinoTintoSeleccionado.precio + vinoBlancoSeleccionado.precio}`;


alert(precioTotal);