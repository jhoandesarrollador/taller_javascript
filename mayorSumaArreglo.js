function mayorSumaSubarreglo(arr) {
    let maxSuma = arr[0]; 
    let sumaActual = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sumaActual += arr[i];
      if (sumaActual > maxSuma) {
        maxSuma = sumaActual;
      }
      if (sumaActual < 0) {
        sumaActual = 0; 
      }
    }
    return maxSuma;
  }
  console.log(mayorSumaSubarreglo([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 