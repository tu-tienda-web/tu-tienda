document.addEventListener("DOMContentLoaded", () => {
    const carritoLista = document.getElementById("carrito-lista");
    const carritoIcono = document.getElementById("carrito-icono");
    const carritoVentana = document.getElementById("carrito-ventana");
    const cerrarCarrito = document.getElementById("cerrar-carrito");
    const agregarBtn = document.getElementById("agregar-carrito");
    const contadorCarrito = document.getElementById("contador-carrito");
  
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    const actualizarCarrito = () => {
      carritoLista.innerHTML = "";
      carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.classList.add("producto-carrito");
        item.innerHTML = `
          <img src="${producto.imagen}" />
          <div>
            <p>${producto.nombre}</p>
            <div class="cantidad-controles">
              <button onclick="cambiarCantidad(${index}, -1)">-</button>
              <span>${producto.cantidad}</span>
              <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </div>
          </div>
          <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoLista.appendChild(item);
      });
      contadorCarrito.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  
    window.cambiarCantidad = function(index, cambio) {
      carrito[index].cantidad += cambio;
      if (carrito[index].cantidad < 1) {
        carrito[index].cantidad = 1;
      }
      actualizarCarrito();
    };
  
    window.eliminarDelCarrito = function(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
  
    agregarBtn.addEventListener("click", () => {
      const nombre = document.getElementById("modal-titulo").textContent;
      const imagen = document.getElementById("modal-img").src;
      const cantidad = parseInt(document.getElementById("cantidad").value);
  
      // Buscar si ya existe
      const index = carrito.findIndex(p => p.nombre === nombre && p.imagen === imagen);
      if (index !== -1) {
        carrito[index].cantidad += cantidad;
      } else {
        carrito.push({ nombre, imagen, cantidad });
      }
  
      actualizarCarrito();
      document.getElementById("modal").style.display = "none";
    });
  
    carritoIcono.addEventListener("click", () => {
      carritoVentana.style.display = carritoVentana.style.display === "block" ? "none" : "block";
    });
  
    cerrarCarrito.addEventListener("click", () => {
      carritoVentana.style.display = "none";
    });
  
    actualizarCarrito();
  });
  