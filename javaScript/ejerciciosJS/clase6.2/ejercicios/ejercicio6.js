let palabras = [];

for (let i = 0; i <= 6; i++) {                         //7-1 (ulrima posicion)
                                                       //palabras[i] = prompt("Escribe la palabra :"); //template ${i + 1}
  palabras[i] = prompt(`Escribe la palabra con el mismo formato. Llevas: ${i}:`);//muestra cuantas palabras llevas
                                                      //palabras.push(palabras[i]);
}
console.log(palabras.length);

for (let i = 0; i < palabras.length - 1; i++) { //el proceso se repite el mismo numero de elementos -1
  for (let j = 0; j < palabras.length - i -1; j++) { //recorre el array comparando palabras.... se podría empezar en j=0 y ahorrarse el -1
    if (palabras[j] > palabras[j + 1]) { //comparo posiciones seguidas
      //lo de abajo es para cabiar el orden de los elemntos del array
      let temp = palabras[j]; //asigno a temp el valor si es mayor para dejarlo en la izquierda
      palabras[j] = palabras[j + 1]; //adelanto posicion [j]
      palabras[j + 1] = temp; // vuelvo a meter el valor al principio del porceso con temp
    }
  }
}

console.log(palabras);

//for (let i = 0; i < 6; i++) { //7-1 (ulrima posicion)
  //alert(forEach.palabras[i]);
  //+", "+ palabras[i++]+", "+ palabras[i+2]+", "+ palabras[i+3]+", "+ palabras[i+4]+", "+ palabras[i+4]