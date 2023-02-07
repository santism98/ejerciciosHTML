//! Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.



var letra= prompt("mete una letra");
 
var frase= prompt("mete una frase");

let j=0;

for(let i = 0; i<frase.length; i++){
    if(letra==frase[i]){
        j++;
    }
}console.log(j);

// for(ler i = 0; ){
//     letra
// }

