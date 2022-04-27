//DESAFIO 1 | interactivo


alert("La idea es que el usuario con edad mayor o igual a 18 años pueda ingresar con su nombe y elegir distinta variedad de vinos de la tienda de la vinoteca");

//POsibles Variables a futuro
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

    alert(`Hola ${nombre}, ${apellido} bienvenid@ a VinotecaBBB`);
}


//Ejecucion Interactivo

solicitarEdad();

//Menu de navegacion de productos

//variables de productos
let vinoTinto = "Vino Tinto";
let vinoBlanco= "Vino Blanco";

//variables de precio de los productos
const vinoTintoPrecio = 1500;
const vinoBlancoPrecio = 1200;
const IVA = 0.21;


function select(){

    let seleccion = prompt(`indique con el numero de referencia el producto que desea:
    \n 1. Vino Tinto
    \n 2. Vino Blanco`);

    if(seleccion == "1" || seleccion == "uno") {
        let productSelect = (`${vinoTinto} + ${vinoTintoPrecio}`;
        alert(`Buena desicion! Seleccionaste ${productSelect}`);

    } else if (seleccion == "2" || seleccion == "dos") {
        let productSelect = (`${vinoBlanco} + ${vinoBlancoPrecio}`);
        alert(`Excelente! Seleccionaste ${productSelect}`);

    }else{
        alert("Tienes que elegir entre las opciones brindadas");
    }
}

select();

//Funcion de Totales
function sumaTotal(suma){

let suma = productSelect*IVA;
alert(`El total a pagar es ${suma}`);
    return;
}

//Ejecucion la suma total 
sumaTotal (suma);
