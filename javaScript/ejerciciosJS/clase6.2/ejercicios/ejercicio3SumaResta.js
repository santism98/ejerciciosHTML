var n1 = parseInt(prompt("Inserta un número"));
var n2 = parseInt(prompt("Inserta un número"));
var operacion = prompt("Qué operacion quieres hacer? en minuscula");

if (operacion == "suma"){ 
    console.log(n1+n2);
}else if(operacion == "resta"){
    console.log(n1-n2);
} else{
    alert("COMPRUEBA ENTRADAS");
}
