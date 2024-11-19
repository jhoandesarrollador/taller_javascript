
function sonAnagramas(cadena1, cadena2) {
    let ordenar = function(cadena) {
      return cadena.split("").sort().join(""); 
    };
    return ordenar(cadena1) === ordenar(cadena2);
  }
  console.log(sonAnagramas("roma", "amor")); 