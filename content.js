// Palabra que queremos detectar
var palabrasClave = ["correo","electrónico","bitcoin","trade","Trade","Bitcoin","oferta","gratis","extensión","actualice","Actualice"];

function resaltarPalabras(palabras) {
    var contenido = document.body.innerHTML;
    palabras.forEach(function(palabra) {
      var expresion = new RegExp(palabra, "gi");
      var resaltado = '<span style="background-color: yellow;">$&</span>';
      contenido = contenido.replace(expresion, resaltado);
    });
    document.body.innerHTML = contenido;
  }
  
  function mostrarAlerta(palabra) {
    alert("ALERTA! En esta página hay posible correo malicioso. Ten cuidado con el contenido subrayado");
  }
  // Verifica si el contenido de la página contiene la palabra clave
  palabrasClave.forEach(function(palabra) {
  if (document.body.innerText.toLowerCase().includes(palabra)) {
    // Si se encuentra la palabra clave, resalta la palabra
    resaltarPalabras([palabra]);
    mostrarAlerta(palabra);
  }
});
