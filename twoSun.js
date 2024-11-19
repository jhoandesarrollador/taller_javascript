function twoSum(numeros, objetivo) {
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] + numeros[j] === objetivo) {
          return [i, j];
        }
      }
    }
  }
  console.log(twoSum([2, 7, 11, 15], 9)); 