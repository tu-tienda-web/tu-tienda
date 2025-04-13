document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalPrecio = document.getElementById("modal-precio");
    const cantidadInput = document.getElementById("cantidad");
    const cerrar = document.querySelector(".cerrar");
  
    document.querySelectorAll(".btn-ver").forEach((btn) => {
      btn.addEventListener("click", () => {
        const imagen = btn.dataset.imagen;
        const producto = btn.dataset.producto;
        const precio = btn.dataset.precio;
        const descripcion = btn.dataset.descripcion;
  
        modalImg.src = imagen;
        modalTitulo.textContent = producto;
        modalDescripcion.textContent = descripcion;
        modalPrecio.textContent = precio;
        cantidadInput.value = 1;
  
        modal.style.display = "flex";
      });
    });
  
    cerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

  });