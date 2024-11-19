function agruparAnagramas(palabras) {
    let grupos = {}; 
    for (let palabra of palabras) {
      let clave = palabra.split("").sort().join("");
      if (!grupos[clave]) {
        grupos[clave] = [];
      }
      grupos[clave].push(palabra);
    }
    return Object.values(grupos);
  }
  console.log(agruparAnagramas(["roma", "amor", "mora", "omar"])); 
  