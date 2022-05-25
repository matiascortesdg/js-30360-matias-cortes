/*

//Probando unas Cards 

const contenedor = document.getElementById("productos");

//Tabla carrito
const tablaCarrito = document.getElementById("tablaCarrito");

//Local Storage ó array vacio
const carrito = localStorage.getItem("carrito") || [];

*/

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


//OPERADORES

Productos.length === 0 && console.log("productos está vacio");

const tintos = (Productos.id <= 4 && Productos.tipo === "Vino Tinto") ? true : false;
console.log(tintos);

const blancos = (Productos.id >= 5 && Productos.id <= 8 || Productos.tipo === "Vino Blanco") ? true : false;
console.log(blancos);


//DESESTRUCTURACION DEL PARAMETRO DE UNA FUNCION

function getUser({id, nombre, tipo, variedad, bodega, precio}) {
    console.log(id);
    console.log(nombre);
    console.log(tipo);
	console.log(variedad);
    console.log(bodega);
    console.log(precio);

	}

let VinoTinto = {
    id: 01,
    nombre: "La Celia",
	tipo: "Vino Tinto",
    variedad: "Malbec",
    bodega: "La Celia",
    precio: 650
};

getUser(VinoTinto);


//DESESTRUCTURACION DE OBJETOS DENTRO ARRAYS

const [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12] = Productos;
    console.log(prod1);
    console.log(prod2);
    console.log(prod3);
    console.log(prod4);

    //SPREAD OPERATOR CLONANDO UN PRODUCTO DEL ARRAY

    let prod13 = [{...prod1,
        id: 13,
        nombre: "Elementos",
        tipo: "Vino Tinto",
        variedad: "Malbec",
        bodega: "El Esteco",
        precio: 550,
        top100: 30
    }]
    
    console.log(prod13);






