//DESAFIO 1 | interactivo


alert("La idea es que el usuario con edad mayor o igual a 18 años pueda ingresar con su nombe y elegir distinta variedad de vinos de la tienda de la vinoteca");

//Variables
/*
vinos
vinoTinto
vinoBlanco
espumante
espirituosas*/


//Para ingresar vamos a pedir ser mayor ó igual a 18 años

function solicitarEdad(){
	let edad = prompt("Ingresa tu edad, por favor");

	if (edad >= 18) {
		bienvenida()

	} else {
		alert("Aún no tienes la edad legal para comprar alcohol. Vuelve en unos años")
	} 
}


//Bienvenid@ a nuestra tienda de vinos y bebidas espirituosas una vez comprobada la edad

function bienvenida(){
	let nombre = prompt("Ingresa tu nombre, por favor");
	let apellido = prompt("Ingresa tu apellido, por favor");

    alert(`Hola ${nombre}, ${apellido} bienvenid@ a VinotecaBBB`)
}


//Ejecucion Interactivo

solicitarEdad();

//Menu de navegacion de productos












//Clase de Funciones


class Producto {
    constructor(nombre, precio, cantidad)
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
}

vender() {
    alert("")
}

const producto1 = new Producto("Vino Tinto", 1500, 1);
const producto2 = new Producto("Vino Blanco", 1200, 1);





//Funcion de Totales
function sumaTotal (valorProducto, cantidadProducto){
    return valorProducto*cantidadProducto;
}






















/*

function productos(){
	let vinoTinto = prompt("Ingresa tu nombre, por favor");
	let vinoBlanco = prompt("Ingresa tu apellido, por favor");

    alert(`Hola ${nombre}, ${apellido} bienvenid@ a VinotecaBBB`)


}

let vinoTinto = prompt("ingresa el numero correcto del producto a seleccionar: 1. Vino Tinto n/ ");
let vinoBlanco = 0;
 
while(malbec =="1" || malbec == "uno"){
    intentosVinos++;
    malbec = prompt("ingresa el numero correcto del producto");
}
alert("Ya no puedes comprar. Superaste el numero de intentos");


function Total () {

}
    let resultado = suma()
*/