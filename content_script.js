// Palabra que queremos detectar
var palabraClave = "Hero";

// Función para mostrar una alerta en el navegador
function mostrarAlerta() {
  alert("Cuidado! Se ha encontrado un posible correo phishing ");
}

// Verifica si el contenido de la página contiene la palabra clave
if (document.body.innerText.toLowerCase().includes(palabraClave)) {
  // Si se encuentra la palabra clave, muestra la alerta
    mostrarAlerta()
}
// Palabra que queremos detectar y resaltar
//var palabraClave = "correo";
// Función para resaltar la palabra clave
function resaltarPalabra(palabra) {
  var contenido = document.body.innerHTML;
  var expresion = new RegExp(palabra, "gi");
  var resaltado = '<span style="background-color: yellow;">$&</span>';
  contenido = contenido.replace(expresion, resaltado);
  document.body.innerHTML = contenido;


// Verifica si el contenido de la página contiene la palabra clave
if (document.body.innerText.toLowerCase().includes(palabraClave)) {
  // Si se encuentra la palabra clave, resalta la palabra
  resaltarPalabra(palabra);
}
}
