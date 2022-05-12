//Eventos pasando variables

let btnWelcome = document.getElementById("btnBienvenida");
btnWelcome.addEventListener("click", bienvenidaClick);

function bienvenidaClick() {
   console.log("Bienvenido A BBB");
};

//2do ejemplo evento con flecha

let btnVTintos = document.getElementById("btnVinosTintos");
btnVTintos.onclick = () => {
    console.log("Nuestra lista de Vinos Tintos");
};

let btnVBlancos = document.getElementById("btnVinosBlancos");
btnVBlancos.onclick = () => {
    console.log("Nuestra lista de Vinos Blancos");
};

//3er Ejemplo de evento como variable


function respuestaPromosClick() {
console.log("Quiero Quiero ver!");
};

let evento = prompt("Escribe 'click' para ver a los eventos promociones por consola?");

let btnPromos = document.getElementById("btnPromociones");

if(evento === "click") {

btnPromos.addEventListener(evento, respuestaPromosClick);
};


//4ejemplo con doble click (recomendada)

function respuestaDescClick() {
console.log("Respuesta a descuentos doble click!");
};

function respuestaDescDblClick() {
console.log("Respuesta a descuentos doble click");
}

let evento2 = prompt("Escribe 'click' o 'dblclick' para ver eventos descuentos por consola??");

let btnDesc = document.getElementById("btnDescuentos");

if(evento2 === "click") {

btnDesc.addEventListener(evento2, respuestaDescClick);

}else{
btnDesc.addEventListener("dblclick", respuestaDescDblClick);
};


//INTERACTUANDO CON HTML

//Probando unas Cards 

const contenedor = document.getElementById("productos");

//Tabla carrito
const tablaCarrito = document.getElementById("tablaCarrito");

//Local Storage ó array vacio
const carrito = localStorage.getItem("carrito") || [];

const Productos = [

//Vinos Tintos

{id: 01,
nombre: "La Celia",
tipo: "Vino Tinto",
variedad: "Malbec",
bodega: "La Celia",  
precio: 650,
imagen: "https://frappe.com.ar/img/productos/grande/1006936.png",
stock:1,

},

{id: 02,
nombre: "Killka",
tipo: "Vino Tinto",
variedad: "Cabernet Sauvignon",
bodega: "Salentein",  
precio: 850,
imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/killa.png",
stock:4,

},

{id: 03,
nombre: "Portillo",
tipo: "Vino Tinto",
variedad: "Syrah",
bodega: "Las Moras",  
precio: 650,
imagen: "https://cepadevinos.com/wp-content/uploads/2018/10/syrah-1.png",
stock:6,

},

{id: 04,
nombre: "San Felipe",
tipo: "Vino Tinto",
variedad: "Merlot",
bodega: "La Rural",  
precio: 650,
imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/San-felipe.jpg",
stock:9,

},


//Vinos Blancos

{id: 05,
nombre: "La Linda",
tipo: "Vino Blanco",
variedad: "Torrontes",
bodega: "La Linda",  
precio: 800,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Finca_La_Linda_Torront%C3%A9s_mjzbrq.jpg",
stock:9,

},

{id: 06,
nombre: "Del Fin Del Mundo",
tipo: "Vino Blanco",
variedad: "Chardonnay",
bodega: "Del Fin Del Mundo",  
precio: 950,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Del_Fin_del_Mundo_Reserva_Chardonnay_ufuchx.jpg",
stock:5,

},

{id: 07,
nombre: "Zuccardi Serie A",
tipo: "Vino Blanco",
variedad: "Blend",
bodega: "Familia Zuccardi",  
precio: 1050,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Zuccardi_Serie_A_Chardonnay_Viognier_x30fqh.jpg",
stock:7,

},


{id: 08,
nombre: "Nieto Senetiner",
tipo: "Vino Blanco",
variedad: "Semillon",
bodega: "Nieto Senetiner",  
precio: 650,
imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/7793440002408.png",
stock:4,

},

//Espumantes

{id: 09,
nombre: "Familia Gascón Extra Brut",
tipo: "Espumante",
variedad: "Blend",
bodega: "Escorihuela Gascon",  
precio: 845,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Familia_Gasc%C3%B3n_Extra_Brut_vl8dx1.jpg",
stock:5,

},


{id: 10,
nombre: "Nieto Senetiner Brut Nature",
tipo: "Espumante",
variedad: "Pinot Noir",
bodega: "Nieto Senetiner",  
precio: 1279,
imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/7793440700939.png",
stock:3,

},

{id: 11,
nombre: "Las Perdices Champenoise Extra Brut Rosét",
tipo: "Espumante",
variedad: "Blend",
bodega: "Las Perdices   ",  
precio: 1509,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Las_Perdices_Champenoise_Extra_Brut_Ros%C3%A9_d9wqxe.jpg",
stock:8,

},

{id: 12,
nombre: "Luigi Bosca Brut Nature",
tipo: "Espumante",
variedad: "Blend",
bodega: "Luigi Bosca",  
precio: 2218,
imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luigi_Bosca_Brut_Nature_z8wcvc.jpg",
stock:0,

}

];


//Item Cards por cada uno de los objetos
const getCard = (item) => {
return (`
<div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
    <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.variedad}</p>
        <p class="card-text">${item.bodega}</p>
        <p class="card-text">${item.precio}</p>
        <p class="card-text">Stock: ${item.stock}</p>
        
        <button onclick=agregarCarrito(${item.id}) class="btn ${item.stock ? 'btn-primary' : 'btn-secondary'}" ${!item.stock ? 'disabled' : '' } >Agregar al carrito</button>
    </div>
</div>
`);

};


//Funcion tabla carrito
const getRow = (item) => {

return(`
<tr>
    <th scope="row">${item.id}</th>
    <td>${item.nombre}</td>
    <td>${item.cantidad}</td>
    <td>$${item.precio * item.cantidad} ($${item.precio})</td>
    <td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
    </tr>
`)
};


//Quiero agregar por cada uno usando funcion flecha
const cargarProductos = (datos, nodo, carritoTabla) => {
//a este acumulador le voy a llamar a cards
let acumulador = "";
// para recorrer el array 
datos.forEach((el) => {
acumulador += carritoTabla ? getRow(el) : getCard(el);

})

nodo.innerHTML = acumulador;
}

//funcion de agregar al carrito
const agregarCarrito = (id) => {
const seleccion = Productos.find(item => item.id === id);

//cuando se agregar productos repetidos al carrito
const repetido = carrito.findIndex(el => el.id === id);

if(repetido === -1) {

    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        precio: seleccion.precio,
        cantidad: 1,
        imagen: seleccion.imagen,

    })
}else {
    carrito[repetido].cantidad = carrito[repetido].cantidad + 1 
}


//alert("Agregaste al Carrito el producto: " + seleccion.nombre);

// ami carrito vamos a pushear elementos objetos


//si tenemos carrito
cargarProductos(carrito, tablaCarrito, true);

}

cargarProductos(Productos, contenedor, false);

