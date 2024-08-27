function validarTexto(texto) {
  // Expresión regular para validar solo caracteres minúsculos y espacios
  const regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

function Encriptar() {
  var frase = document.getElementById("frase").value;
  var titulo = document.getElementById("titulo");
  var parrafo = document.getElementById("parrafo");
  var muñeco = document.getElementById("muñeco");

  // Verificar si el campo está vacío
  if (frase.length === 0) {
      muñeco.src = "img/Muñeco (1).png";
      if (typeof swal === "function") {
          swal("Debe llenar el campo", "Debes ingresar un texto valido", "warning");
      } else {
          alert("Debe llenar el campo: Debes ingresar un texto valido");
      }
      return;
  }

  // Verificar si el texto contiene solo caracteres válidos
  if (!validarTexto(frase)) {
      muñeco.src = "img/Muñeco (1).png";
      if (typeof swal === "function") {
          swal("El texto ingresado no es válido", "No se permiten mayúsculas ni caracteres especiales", "warning");
      } else {
          alert("El texto ingresado no es válido: No se permiten mayúsculas ni caracteres especiales");
      }
      return;
  }

  var fraseCriptada = frase
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("frase").value = fraseCriptada;
  titulo.textContent = "Texto Encriptado";
  parrafo.textContent = " "; // Si quieres un párrafo vacío
  muñeco.src = "https://d22k5h68hofcrd.cloudfront.net/magefan_blog/Como_cifrar_correos_y_enviar_mensajes_seguros.jpg";
}

function Desencriptar() {
  var frase = document.getElementById("frase").value;
  var titulo = document.getElementById("titulo");
  var parrafo = document.getElementById("parrafo");
  var muñeco = document.getElementById("muñeco");

  // Verificar si el campo está vacío
  if (frase.length === 0) {
      muñeco.src = "img/Muñeco (1).png";
      if (typeof swal === "function") {
          swal("Debe llenar el campo", "Debes ingresar un texto valido", "warning");
      } else {
          alert("Debe llenar el campo: Debes ingresar un texto valido");
      }
      return;
  }

  // Verificar si el texto contiene solo caracteres válidos
  if (!validarTexto(frase)) {
      muñeco.src = "img/Muñeco (1).png";
      if (typeof swal === "function") {
          swal("El texto ingresado no es válido", "No se permiten mayúsculas ni caracteres especiales", "warning");
      } else {
          alert("El texto ingresado no es válido: No se permiten mayúsculas ni caracteres especiales");
      }
      return;
  }

  var fraseDesencriptada = frase
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("frase").value = fraseDesencriptada;
  titulo.textContent = "Texto Desencriptado";
  parrafo.textContent = " "; // Si quieres un párrafo vacío
  muñeco.src = "https://elceo.com/wp-content/uploads/2020/11/smartphone.jpg";
}

  
