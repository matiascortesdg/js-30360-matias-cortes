// Desafio - Primera Preentrega


//Declaro una Clase que agrupe / para intentar como me dijiste Nico 

class Articulo {
    constructor(codigoArt, tipo, variedad, nombre, bodega, precio, cantidad){
        this.codigoArt = codigoArt;
        this.tipo = tipo;
        this.variedad = variedad;
        this.nombre = nombre;
        this.bodega = bodega;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
}

//Mis articulos las declaro con const con 

//Vinos Tintos

const art01 = new Articulo (01, "Vino Tinto", "Malbec", "La Celia", "La Celia", 500, 0);
const art02 = new Articulo (02, "Vino Tinto", "Cabernet Sauvignon", "Killka", "Salentein", 850, 0);
const art03 = new Articulo (03, "Vino Tinto", "Syrah", "Portillo", "Las Moras", 750, 0);
const art04 = new Articulo (04, "Vino Tinto", "Merlot", "San Felipe", "La Rural", 650, 0);

//Vinos Blancos

const art05 = new Articulo (05, "Vino Blanco", "Torrontes", "La Linda", "La Linda", 800, 0);
const art06 = new Articulo (06, "Vino Blanco", "Chardonnay", "Del Fin Del Mundo", "Del Fin Del Mundo", 950, 0);
const art07 = new Articulo (07, "Vino Blanco", "Blend", "Zuccardi", "Familia Zuccardi", 1050, 0);
const art08 = new Articulo (08, "Vino Blanco", "Semillon", "Nieto Senetiner", "Nieto Senetiner", 650, 0);


//Ahora los Arraysa

const articulos = [art01, art02, art03, art04, art05, art06, art07, art08];
const miCarrito = [];
const miCarritoTotal = [];


//Funcion de Bienvenida

function bienvenida(){
	let nombre = prompt("Ingresa tu nombre, por favor");
    alert(`Hola ${nombre}, bienvenid@ a VinotecaBBB`);
}

bienvenida();



//Menu principal

let main = true;


function menu(){
    const menuPrincipal = prompt(
        `Ingrese el número de la categoría que le gustaría ver` +
        `\n` +
        `1. Vinos Tintos:\n` +
        `----\n` +
        `2. Vinos Blancos:\n` +
        `----\n` +
        `3. Buscar un articulo\n` +
        `----\n` +
        `4. Resultados usando filtros\n` +
        `----\n` +
        `5. Tu Carrito de compras\n`

    );

    switch(menuPrincipal){
        case "1":
            productos(); //Productos Vino Tinto
        case "2":;
            productos2(); //Productos Vino Blanco
        case "3":
            busqueda(); //Busqueda usando Filtros
        case "4":
            filtros(); //Busqueda personalizada
        case "5":
            sumaTotal(); //Suma total de productos
        default:
            menu(); //Volver al Menu principal
    }
}


//Function de Busqueda

function busqueda(){
    const busquedaRapida = prompt(`Contanos, qué estás buscando?\n` +
        `\n` +
        `0. Volver a Inicio`
    );
    if(busquedaRapida == "0"){
        menu();//Volver al Menu principal

    }else if(busquedaRapida.length > 0){
        const busquedaEncontrada = articulos.find((busqueda1) => busqueda1.nombre.includes(busquedaRapida))
        const verBusqueda = `${busquedaEncontrada.tipo} ${busquedaEncontrada.variedad} ${busquedaEncontrada.nombre} ${busquedaEncontrada.precio}`;

        alert(`Resultados encontrados: ` + `${verBusqueda}`);
        
    }else{
        busqueda();
    }
}


//Function de busqueda usando filtros

function filtros(){
    const busquedaFiltros = prompt(`Puedes filtrar articulos por:\n` +
        `\n` +
        `1 | Vinos por precio maximo\n` +
        `----\n` +
        `2. | Vinos por variedad\n` +
        `----\n` +
        `\n` +
        `0. Volver al Menu`
    );

    switch(busquedaFiltros){
        case "1":
            const precioMax = parseFloat(prompt(`Ahora ingrese el precio maximo de busqueda de los articulos: `));
            
            const precioEncontrado = articulos.filter(art => art.precio <= precioMax);

            let verFiltroEncontrado = precioEncontrado.reduce((add, ArtA) => add + "\n" + ArtA.nombre + "   $" + ArtA.precio, "");
            
            const precioEncontrado2 = prompt(`Estos son los resultados: ${precioMax}:\n` + `${verFiltroEncontrado}\n` +
            `----\n` +
                `1. Volver a Filtros\n` +
                `----\n` +
                `0. Volver al Menu`
            );

            switch(precioEncontrado2){
                case "1":
                    filtros();
                case "0":
                    menu();
            }

        case "2":
            const variedadEncontrada = prompt(`Podemos ayudarte con algunas sugerencias de variedades? Ingresa alguna de estas:\n` +
                `----\n` +
                `Malbec\n` +
                `Cabernet\n` +
                `Merlot\n` +
                `Torrontes\n`+
                `Chardonnay\n`
                `Blend\n`+
                `Semillon\n`
            );

            const variedadEncontrada2 = articulos.filter((ArtA) => ArtA.variedad.includes(variedadEncontrada));
            
            let verFiltroVariedad = variedadEncontrada2.reduce((add2, ArtB) => add2 + "\n" + ArtB.nombre + "$" + ArtB.precio, "");

            const variedadFiltro = prompt(`Su busqueda: ${variedadEncontrada}\n` + `${verFiltroVariedad}\n` +
                `1. Volver a Filtros\n` +
                `----\n` +
                `0. Volver al Menu`
            );
            switch(variedadFiltro){
                case "1":
                    filtros();
                case "0":
                    menu();
            }

        default:
            filtros();

        case "0":
            menu();
    }
}


//Section de Productos

function productos(){
    const productosVinoTinto = prompt(
        `Nuestra galeria de Vino Tintos:\n` +
        `----\n` +
        `1. ${art01.nombre} $${art01.precio}\n` +
        `2. ${art02.nombre} $${art02.precio}\n` +
        `3. ${art03.nombre} $${art03.precio}\n` +
        `4. ${art04.nombre} $${art04.precio}\n` +
        `----\n` +
        `0. Volver al Menu\n`
    );
    switch(productosVinoTinto){
        case "1": //Vino Tinto La Celia
            art01.cantidad = art01.cantidad + 1;
            miCarrito.push(`${art01.nombre} $${art01.precio}`);
            miCarritoTotal.push(500);

            alert(`Agregaste` `${art01.nombre} $${art01.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art01.cantidad}`);
            
            productos();

        case "2": //Vino Tinto Killka
            art02.cantidad = art02.cantidad + 1;
            miCarrito.push(`${art02.nombre} $${art02.precio}`);
            miCarritoTotal.push(850);

            alert(`Agregaste` `${art02.nombre} $${art02.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art02.cantidad}`);

            productos();

        case "3": //Vino Tinto Las Moras
            art03.cantidad = art03.cantidad + 1;
            miCarrito.push(`${art03.nombre} $${art03.precio}`);
            miCarritoTotal.push(750);

            alert(`Agregaste` `${art03.nombre} $${art03.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art03.cantidad}`);

            productos();

        case "4": //Vino Tinto San Felipe
            art04.cantidad = art04.cantidad + 1;
            miCarrito.push(`${art04.nombre} $${art04.precio}`);
            miCarritoTotal.push(650);

            alert(`Agregaste` `${art04.nombre} $${art04.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art04.cantidad}`);

            productos();

        case "0":
            menu();
        default:
            productos();
    }
}

function productos2(){
    const productosVinoBlanco = prompt(
        `Nuestra galeria de Vino Blanco:\n` +
        `----\n` +
        `1. ${art05.nombre} $${art05.precio}\n` +
        `2. ${art06.nombre} $${art06.precio}\n` +
        `3. ${art07.nombre} $${art07.precio}\n` +
        `4. ${art08.nombre} $${art08.precio}\n` +
        `----\n` +
        `0. Volver al Menu\n`
    );
    switch(productosVinoBlanco){
        case "1": //Vino Blanco La Linda
            art05.cantidad = art05.cantidad + 1;
            miCarrito.push(`${art05.nombre} $${art05.precio}`);
            miCarritoTotal.push(800);

            alert(`Agregaste` `${art05.nombre} $${art05.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art05.cantidad}`);
            
            productos2();

        case "2": //Vino Blanco Del Fin Del Mundo
            art06.cantidad = art06.cantidad + 1;
            miCarrito.push(`${art06.nombre} $${art06.precio}`);
            miCarritoTotal.push(950);

            alert(`Agregaste` `${art06.nombre} $${art06.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art06.cantidad}`);

            productos2();

        case "3": //Vino Blanco Zuccardi
            art07.cantidad = art07.cantidad + 1;
            miCarrito.push(`${art07.nombre} $${art07.precio}`);
            miCarritoTotal.push(1050);

            alert(`Agregaste` `${art07.nombre} $${art07.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art07.cantidad}`);

            productos2();

        case "4": //Vino Blanco Nieto Senetiner
            art08.cantidad = art08.cantidad + 1;
            miCarrito.push(`${art08.nombre} $${art08.precio}`);
            miCarritoTotal.push(650);

            alert(`Agregaste` `${art08.nombre} $${art08.precio}` `al carrito` +
            `----\n` +
            `Cantidad en tu carrito de compras:${art08.cantidad}`);

            productos2();

        case "0":
            menu();
        default:
            productos2();
    }
}

//Suma de los valores totales de los articulos en mi carrito de compras

function sumaTotal(){
    let valorTotal  = miCarritoTotal.reduce((a, b) => a + b, 0);
    const verDetalleCarrito = prompt(
        `Mi Carrito de Compras:\n` +
        `\n` +
        `${miCarrito.join("")}\n` +
        `\n` +
        `Total de la compra: $${valorTotal }\n` +
        `\n` +
        `1 | Pagar\n` +
        `2 | ↩`
    );
    switch(verDetalleCarrito){
        case "1":
            alert(
                `Se ha completado la compra!\n` +
                `\n` +
                `Recibira su factura y/o comprobante de compra al siguiente mail:\n` +
                `example******@mail.com\n`
            );
            miCArrito.splice(0, miCarrito.length);
            miCarritoTotal.splice(0, miCarritoTotal.length);
            menu();
        case "2":
            menu();
        default:
            sumaTotal();
    }
}








//Vamos a ejecutar
while(main){
    menu();
}

