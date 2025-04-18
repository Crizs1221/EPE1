function mostrarDatos(event) {
    event.preventDefault(); // evita que recargue la página

    // Obtener los valores
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const comuna = document.getElementById("comuna").value;

    // Muestra la alerta  
    alert(`Datos ingresados:\nNombre: ${nombre}\nCorreo: ${correo}\nDirección: ${direccion}\nComuna: ${comuna}`);

    // Mostrar en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <h3>Datos ingresados:</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Dirección:</strong> ${direccion}</p>
      <p><strong>Comuna:</strong> ${comuna}</p>
    `;
  }