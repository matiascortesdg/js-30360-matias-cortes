//Primeras ejercicios de JS
//Ciclos - Complementario

//Ejemplo 1 / Ingreso con nombre y Edad



let nombre = prompt("Por favor introduce tu nombre");
let edad = parseFloat(prompt("Ingrese su edad"));

if(edad >= 18) {
    alert("Hola " + nombre + " bienvenid@ a nuestra tienda");
    
}else{
    alert("Ups! Parece que no tienes edad suficiente para ingresar");
}


//Ejemplo 2 / Una vez ingresado qué preferencias tiene

let cepaVino = prompt("Qué cepa de vino que más le gusta");

while (cepaVino != "esc"){
    let copasVino = parseInt(prompt("Ingrese la cantidad de copas de vino suele tomar"));
    
    if(copasVino <= 2) {
        alert("Usted sabe beber con responsabilidad");
    }

    if(copasVino = 3) {
        alert("Está bien si es de vez en cuando");
    }

    else(copasVino > 3);{
        alert("Le recomendamos pedir ayuda. Nosotros le dejamos unos numeros de contacto Teléfono - (011) 5263-8621 - Mail - osg@aa.org.ar");
        break;
    }

}

alert("Gracias por visitarnos");

//Ejemplo 3 / 

let cantidad = parseInt(prompt("Ingrese la cantidad de veces que se repetirá las copas de vino"))

for (let i= 0; i < cantidad; i++) {
	alert("este mensaje de copas se repetirá" + " " + cantidad + " " + "veces");
}


//Ejemplo 4

let malbec = prompt("ingresa el numero correcto del producto");
let intentosVinos = 0;
 
while(malbec !="1234" && intentosVinos != 3){
    intentosVinos++;
    malbec = prompt("ingresa el numero correcto del producto");
}
alert("Ya no puedes comprar. Superaste el numero de intentos");
