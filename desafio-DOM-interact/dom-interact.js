//DESAFIO DOM - INTERACTUANDO CON HTML

//Probando unas Cards 



const contenedor = document.getElementById("productos");

//Tabla carrito
const tablaCarrito = document.getElementById("tablaCarrito");

//Local Storage ó array vacio
const carrito = localStorage.getItem("carrito") || [];

const Espumantes = [

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
    const seleccion = Espumantes.find(item => item.id === id);

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

cargarProductos(Espumantes, contenedor, false);

