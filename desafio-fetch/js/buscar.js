import { getData } from "./js/getData.js";
const productos = await getData();
import {agregarAlCarrito} from "./js/procesoCarrito.js";

let productosEncontrados = [];
console.log(productos);

let search = document.getElementById("search");

search.addEventListener('keyup', buscar);

function buscar() {
    let busqueda = search.value.toUpperCase();
    console.log(busqueda);
    productosEncontrados = productos.filter ((el) => el.nombre.toUpperCase().includes(busqueda));
    console.log(productosEncontrados);
    crearListaDeProductosBusqueda();
}

let close = document.getElementById('close');
close.addEventListener('click', borrarBusqueda);


const crearListaDeProductosBusqueda = async () => {
    const tarjeta = document.getElementById("tarjeta");
    tarjeta.innerHTML = "";
  
    productosEncontrados.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.classList.add("col-4");
      div.classList.add("p-3");
      div.innerHTML += `
                        <img src="${producto.image}" class="card-img-top" alt="" />
                        <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">Tipo: ${producto.tipo}</p>
                          <p class="card-text">Variedad: ${producto.variedad}</p>
                          <p class="card-text">Bodega: ${producto.bodega}</p>
                          <p class="card-text">$${producto.precio}</p>
                          <a class="btn-floating btn-large" id=btnAgregar ${producto.id}><i class="material-icons">add_shopping_cart</i></a>    
                        
                        </div>`;
      tarjeta.appendChild(div);
      
      
      const btnAgregar = document.getElementById(`btnAgregar${producto.id}`);
      
      btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
      });
    });
  };


  function borrarBusqueda() {
      search.value = '';
      productosEncontrados = productos;
      crearListaDeProductosBusqueda();
      
  }