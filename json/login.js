function mostrarModal() {
    document.getElementById("modalRegistro").style.display = "flex";
  }

  function cerrarModal() {
    document.getElementById("modalRegistro").style.display = "none";

  function registrar() {
    const user = document.getElementById("nuevoUsuario").value.trim();
    const pass = document.getElementById("nuevaContrasena").value.trim();

    if (user && pass) {
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const existe = usuarios.find(u => u.usuario === user);
      if (existe) {
        alert("Este usuario ya está registrado.");
        return;
      }

      usuarios.push({ usuario: user, contrasena: pass });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("¡Registro exitoso!");
      cerrarModal();
    } else {
      alert("Completa todos los campos.");
    }
  }

  