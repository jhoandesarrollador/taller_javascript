function sumaDigitos(num) {
    let suma = 0;
    let digitos = String(num); 
    for (let i = 0; i < digitos.length; i++) {
      suma += Number(digitos[i]); 
    }
    return suma;
  }
  console.log(sumaDigitos(123)); 