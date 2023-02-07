//ejercicio 1
function comparar () {
    let n1 = parseInt(prompt("Inserta un número"));
    let n2 = parseInt(prompt("Inserta un número"));
    let n3 = parseInt(prompt("Inserta un número"));

if (n1<n2 && n1<n3){
    console.log(n1)
}else if (n2<n1&&n2<n3){
    console.log(n2)
}else {
    console.log(n3)
}
}
//ejercicio2

function cuentaPalabras () {
    var letra= prompt("mete una letra");
 
var frase= prompt("mete una frase");

let j=0;

for(let i = 0; i<frase.length; i++){
    if(letra==frase[i]){
        j++;
    }
}console.log(j);
    
}
//ejercicio 3
const sumaResta = function ( ){ 
    let n1 = parseInt(prompt("Inserta un número"));
let n2 = parseInt(prompt("Inserta un número"));
let operacion = prompt("Qué operacion quieres hacer? en minuscula");

    if (operacion == "suma"){ 
    console.log(n1+n2);
        }else if(operacion == "resta"){
            console.log(n1-n2);
                } else{
                    alert("COMPRUEBA ENTRADAS");}
 }

 //ejercicio 4

 ( function () {
    const USER = 'usuario';
    const PASS = 'password';
    let attempts = 3;
    let inputuser;
    let inputpass;

do {
    inputuser = prompt('Escribe tu usuario');
    inputpass = prompt('Escribe tu contraseña');
    attempts--
} while ((inputuser != USER ||  inputpass != PASS) && attempts > 0);
})();