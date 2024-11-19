function busquedaBinaria(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;
  
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
      if (arr[medio] === valor) {
        return medio;
      } else if (arr[medio] < valor) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
    return -1; 
  }
  console.log(busquedaBinaria([1, 3, 5, 7, 9], 5)); 