function esPalindromo(numero) {
    let texto = String(numero); 
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertido += texto[i];
    }
    return texto === invertido;
  }
  console.log(esPalindromo(121)); 