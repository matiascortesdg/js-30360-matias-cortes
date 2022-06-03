import { getData } from "./js/getData.js";

let carritoDePedido = [];
const productos = await getData();

//Valido si en el storage hay algo y sino le asigno un array vacio
carritoDePedido = JSON.parse(localStorage.getItem("productosAgregados")) ?? [];

console.log(carritoDePedido);
//Estas dos lineas son para que al recargar la pagina se mantenga el modal con los productos del storage. 
agregarProductoAlModal();
calculadorCarrito(carritoDePedido);

class Producto {
  constructor(id, nombre, tipo, variedad, bodega, precio, image, stock, cantidad) {
    this.id = id,
    this.nombre = nombre,
    this.tipo = tipo,
    this.variedad = variedad,
    this.bodega = bodega,
    this.precio = precio,
    this.image = image,
    this.stock = stock,
    this.cantidad = cantidad
  }
}


export const agregarAlCarrito = (productoId) => {
  
  const encontrarProductos = () => {
    //Busco si esta repetido 
    let productoRepetido = carritoDePedido.find((producto) => producto.id == productoId);
    sumarProductoRepetido (productoRepetido, productoId);
    console.log(productoRepetido);
  };

  encontrarProductos();

  //TOASTIFY
  Toastify({
    text: "Agregaste un nuevo producto al carrito de compras",
    backgroundColor: '#000000',
    offset: {
      x: '2em', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: '2em' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
  validacionCarrito();
};


function sumarProductoRepetido (prodRepetido, productoId) {
  //Si en producto repetido hay algo entra al if
  if (prodRepetido) {

    //Crea el carritoDePedido con todos los productos menos con ese repetido
    carritoDePedido = carritoDePedido.filter(item => item.id != prodRepetido.id);
    console.log(carritoDePedido);

    //A ese producto le agrega 1 a la cantidad
    prodRepetido.cantidad++

    // //Agrega ese producto al carrito con la cantidad sumada
    carritoDePedido.push(prodRepetido);
    // //Ese carrito lo agrega al storage
    localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
    console.log(carritoDePedido);
    

    //En el modal cambia la cantidad de ese proucto repetido por la actual 
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id="cantidad${prodRepetido.id}">Cantidad: ${prodRepetido.cantidad}</p>`;
    calculadorCarrito(carritoDePedido);
    
    return prodRepetido;
    } else {
      instanciaProductos(productoId);
    }
    validacionCarrito();
}

function agregarProductoAlModal() {
  //Traigo el modal por id
  let modalBody = document.querySelector(".modal-body");

  //Lo vacio para cargarlo
  modalBody.innerHTML = "";

  //Por cada producto del carrito creo un div y un boton de borrar
  carritoDePedido.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("divProductosCarrito");
    div.innerHTML = `<img src="${producto.image}" alt="" class="circle">
                      <p>${producto.nombre}</p>
                      <p>Precio: ${producto.precio}</p>
                      <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                      `;
    let contenedorCarrito = document.createElement("div");
    contenedorCarrito.classList.add("contenedorCarrito");
    let but = document.createElement("div");
    but.classList.add("divBut");
    const botonBorrar = document.createElement("button");
    botonBorrar.innerHTML += `<i class="small material-icons">delete</i>`
    botonBorrar.addEventListener('click', () => {
    eliminarProductoDelCarrito(producto);
    })
    but.appendChild(botonBorrar);
    contenedorCarrito.appendChild(div);
    contenedorCarrito.appendChild(but);
    modalBody.appendChild(contenedorCarrito);

    validacionCarrito();
    

  })
  
};



function eliminarProductoDelCarrito(producto) {
  Swal.fire({
    title: 'Seguro que lo quieres eliminar?',
    text: "Eliminarás el producto completo del carrito!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#F8AC39',
    cancelButtonColor: '#000',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      carritoDePedido = carritoDePedido.filter(item => item.id != producto.id);
      calculadorCarrito(carritoDePedido);
      localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
      agregarProductoAlModal();
      Swal.fire(
        'Eliminado',
        'Eliminaste el producto del carrito',
        'success'
        
      )
    }
  })
  validacionCarrito();
}


function instanciaProductos (productoId) {
  //Busca el producto entre el stock
  let producto = productos.find((producto) => producto.id == productoId);

  let id = producto.id;
  let nombre = producto.nombre;
  let tipo = producto.tipo;
  let variedad = producto.variedad;
  let bodega = producto.bodega;
  let precio = producto.precio;
  let image = producto.image;
  let stock = producto.stock;
  let cantidad = producto.cantidad;

  // Instancio y creo un nuevo objeto con esos datos
  producto = new Producto(id, nombre, tipo, variedad, bodega, precio, image, stock, cantidad);

  //Lo agrego al carrito
  carritoDePedido.push(producto);
  
  console.log(carritoDePedido);
  //Lo guardo en el storage
  localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
  
  //Agrego el producto al modal del carrito
  agregarProductoAlModal(producto);
  calculadorCarrito(carritoDePedido);
  validacionCarrito();
}

function calculadorCarrito (carritoDePedido) {
  let precioTotal = document.getElementById("precio-total");
  //Toma los elementos del array y de ellos calcula precio por la cantidad, no lo acumula y lo devuelve
  let precioSubtotal = carritoDePedido.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
  if (precioSubtotal > 5000) {
    precioSubtotal = precioSubtotal - (precioSubtotal * 0.25);
    precioTotal.innerText = `Felicitaciones! Tu compra supera los $5000, tenes el 25% off.`
    precioTotal.innerHTML += `<p>El precio total es de $ ${precioSubtotal}</p>`
  } else {
    precioTotal.innerText = `El precio total $ ${precioSubtotal}`
  }
  localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
  validacionCarrito();
}


  
//Se ejecuta con el evento click de vaciar carrito
  function vaciarCarrito () {
    Swal.fire({
      title: 'Seguro quieres vaciar el carrito',
      text: "Eliminarás todos los productos del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, vaciar'
    }).then((result) => {
      if (result.isConfirmed) {
        //Vacio el array 
        carritoDePedido = [];
        //Vacio el storage
        localStorage.clear();
        //Vacio el modal, el total y elimino el boton de vaciar
        let modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = "";
        let precioTotal = document.getElementById("precio-total");
        precioTotal.innerText = "";
        let divVaciar = document.getElementById('divVaciar');
        divVaciar.innerHTML = "";
        let divComprar = document.getElementById('divComprar');
        divComprar.innerHTML = "";
        Swal.fire(
          'Eliminado',
          'El carrito fue vaciado',
          'success'
        )
      }
    })
    

  }

//Esta fx valida que el carrito tenga algo para agregar el btn de vaciar carrito
function validacionCarrito () {
  //Valido si el carrito tiene algo
  carritoDePedido = JSON.parse(localStorage.getItem("productosAgregados")) ?? [];
  console.log(carritoDePedido);

  //Si el length del carrito es 0 vacio el contenedor del boton 
  if (carritoDePedido.length == 0) {
    let divVaciar = document.getElementById('divVaciar');
    divVaciar.innerHTML = "";
    let divComprar = document.getElementById('divComprar');
    divComprar.innerHTML = "";

  //Sino agrego el boton de vaciar carrito
  } else {
    let divVaciar = document.getElementById('divVaciar');
        divVaciar.innerHTML = `<button id="vaciar-carrito" type="button" class="btn btn-danger"><i class="small material-icons">delete_forever</i>Vaciar Carrito</button>`;
    let btnVaciarCarrito = document.getElementById("vaciar-carrito");
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    let divComprar = document.getElementById('divComprar');
        divComprar.innerHTML =
        `<a href="/compra.html">
            <button id="comprar-carrito" type="button" class="btn btn-danger black"><i class="small material-icons">check_circle</i>Comprar Carrito</button>
        </a>`;
    
  }
}



validacionCarrito();