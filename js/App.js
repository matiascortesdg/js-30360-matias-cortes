import { agregarAlCarrito } from "./procesoCarrito.js";
// import { productos } from "./stock.js";
import { getData } from "./getData.js";

const crearListaDeProductos = async () => {
  const tarjeta = document.getElementById("tarjeta");
  const productos = await getData();

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.classList.add("col");
    div.innerHTML += `<div class="card mx-auto" style="width:20em;">
                      <img src="${producto.image}" class="card-img-top" alt="" />
                        <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text"><strong>Tipo:</strong> ${producto.tipo}</p>
                          <p class="card-text"><strong>Variedad:</strong> ${producto.variedad}</p>
                          <p class="card-text"><strong>Bodega:</strong> ${producto.bodega}</p>
                          <p class="card-text"><strong>Precio:</strong> $${producto.precio}</p>
                          <button class="btn btn-primary" id=btnAgregar${producto.id}><i class="material-icons">add_shopping_cart</i>Agregar al Carrito</button>    
                            
                          </div>
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