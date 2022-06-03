import { getData } from "./js/getData.js";
const productos = await getData();
import {agregarAlCarrito} from "./js/procesoCarrito.js";

let productosOrdenados = [];
console.log(productos);

let orden = document.querySelector('.orden');

orden.addEventListener('change', ordenar);
console.log(orden.value);

function ordenar() {
    console.log(orden.value);
    if (orden.value == 1) {
      productosOrdenados = productos.sort ((a,b) => b.precio - a.precio);
      console.log(productosOrdenados);
    } else if (orden.value == 2) {
      productosOrdenados = productos.sort ((a,b) => a.precio - b.precio);
    } else if (orden.value == 3) {
      productosOrdenados = productos.sort ((a,b) => a.nombre.localeCompare(b.nombre));
      console.log(productosOrdenados);
    } else if (orden.value == 4) {
      productosOrdenados = productos.sort ((a,b) => a.tipo.localeCompare(b.tipo));
      console.log(productosOrdenados);
    } else if (orden.value == 5) {
      productosOrdenados = productos.sort ((a,b) => a.variedad.localeCompare(b.variedad));
      console.log(productosOrdenados);
    } else if (orden.value == 6) {
      productosOrdenados = productos.sort ((a,b) => a.bodega.localeCompare(b.bodega));
      console.log(productosOrdenados);
    }
    crearListaProductosOrdenados();
    productosOrdenados = [];
}



const crearListaProductosOrdenados = async () => {
    const tarjeta = document.getElementById("tarjeta");
    tarjeta.innerHTML = "";
  
    productosOrdenados.forEach((producto) => {
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
                          <a class="btn-floating btn-large" id=btnAgregar${producto.id}><i class="material-icons">add_shopping_cart</i></a>    
                        
                        </div>`;
      tarjeta.appendChild(div);
      
      
      const btnAgregar = document.getElementById(`btnAgregar${producto.id}`);
      
      btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
      });
    });
  }
