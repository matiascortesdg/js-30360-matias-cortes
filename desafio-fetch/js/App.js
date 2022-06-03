import { agregarAlCarrito } from "./js/procesoCarrito.js";
// import { productos } from "./stock.js";
import { getData } from "./js/getData.js";

const crearListaDeProductos = async () => {
  const tarjeta = document.getElementById("tarjeta");
  const productos = await getData();

  productos.forEach((producto) => {
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
                        <p class="card-text">Precio:$${producto.precio}</p>
                        <p class="card-text">Stock: ${producto.stock}</p>
                        <a class="btn-floating btn-large" id=btnAgregar ${producto.id}><i class="material-icons">add_shopping_cart</i></a>    
                      
                      </div>`;
    tarjeta.appendChild(div);
    
    // console.log(producto.codigo);
    const btnAgregar = document.getElementById(`btnAgregar${producto.id}`);
    // console.log(btnAgregar);
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};

crearListaDeProductos();