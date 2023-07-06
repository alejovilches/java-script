function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let fraseMin = phrase.toLowerCase()
let contador = 0
for (let i = 0; i < fraseMin.length; i++){
    if (fraseMin[i]==="a" ||fraseMin[i]==="e"||fraseMin[i]==="i" ||fraseMin[i]==="o" ||fraseMin[i]==="u"){
        contador++
    }

}

return contador

}
  
function primerDivisible(numeroInicial, num) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
while (num % numeroInicial !== 0) {
    numeroInicial++

}
return numeroInicial

}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
for (let i= 0; i <= 100; i ++  ){
    if (x===i) return "El numero X es: " +  i
} 




}
function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma = 0
for (let i = 1; i <= num; i++){
    suma = suma + i

}
return suma



}
function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇

let decimal = 0;
  for (let i = num.length - 1, j = 0; i >= 0; i--, j++) {
 
    decimal += parseInt(num[i]) * Math.pow(2, j);
}

  return decimal;
}


function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇
let secuencia = [0, 1]
for (let i = 2; i <= n; i++) {
    const num = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(num);
  }

  return secuencia[n];
}



function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
if (numero <= 1) return numero + " no es primo"
for (let i = 2; i < numero; i++){
    if (numero % i === 0){
        return numero + " no es primo."
    }
}
return numero + " es primo."
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let arr = cadena.split("")
let rev = arr.reverse()
return rev.join("")

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}