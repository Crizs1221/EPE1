const productos = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Platano", categoria: "Fruta" },
    { nombre: "Naranja", categoria: "Fruta" },
    { nombre: "Pera", categoria: "Fruta" },
    { nombre: "Frutilla", categoria: "Fruta" },
    { nombre: "Zanahoria", categoria: "Verdura" },
    { nombre: "Lechuga", categoria: "Verdura" },
    { nombre: "Tomate", categoria: "Verdura" },
    { nombre: "Pepino", categoria: "Verdura" },
    { nombre: "Cebolla", categoria: "Verdura" }
  ];
  
  function filtrarProductos() {
    const texto = document.getElementById("busqueda").value.toLowerCase();
    const categoria = document.getElementById("categoria").value;
  
    const filtrados = productos.filter(producto => {
      const coincideNombre = producto.nombre.toLowerCase().includes(texto);
      const coincideCategoria = categoria === "" || producto.categoria === categoria;
      return coincideNombre && coincideCategoria;
    });
  
    mostrarResultados(filtrados);
  }
  
  function mostrarResultados(lista) {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";
  
    if (lista.length === 0) {
      contenedor.innerHTML = "<p>No se encontraron productos.</p>";
      return;
    }
  
    lista.forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `<strong>${producto.nombre}</strong><br><small>${producto.categoria}</small>`;
      contenedor.appendChild(div);
    });
  }
  