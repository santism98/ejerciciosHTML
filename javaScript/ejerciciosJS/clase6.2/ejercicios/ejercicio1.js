var n1 = parseInt(prompt("Inserta un número"));
var n2 = parseInt(prompt("Inserta un número"));
var n3 = parseInt(prompt("Inserta un número"));

if (n1<n2 && n1<n3){
    console.log(n1)
}else if (n2<n1&&n2<n3){
    console.log(n2)
}else {
    console.log(n3)
}