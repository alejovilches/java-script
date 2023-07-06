// Operadores Matemáticos

function suma(x, y){
    // X e Y  ambos son números, haz que esta función retorne el resultado de la suma de ambos
    // Tu código:
    return x + y
}

function resta(x, y){
    // X e Y  ambos son números, haz que esta función retorne el resultado de la resta de ambos
    // Tu código:
    return x - y
}

function multiplicacion(x, y){
    // haz que esta función retorne el resultado de la multiplicación entre 'X' e 'Y'
    // Tu código:
    return x * y
}

function resto(x, y){
    // X e Y  ambos son números, haz que esta función retorne el resto de 'X' e 'Y'
    // Tu código:
    return x % y
}

function porcentajeX(chicos, chicas){
    //Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso
    //actual. Diseñar un algoritmo para este propósito. Recuerda que para calcular el porcentaje
    //puedes hacer una regla de 3 simple.
    //Tu código:
    let porcentajechicos = (chicos * 100)/(chicos + chicas)
    let porcentajechicas = (chicas * 100)/(chicos + chicas)
    return porcentajechicos, porcentajechicas
}

function elevadoAlCubo(num){
    //'num' es un numero entero. Eleva este numero al cubo y devuelve su valor
    //Tu código:
    return num ** 3
}

function roundUp(num){
    //Redondea hacia arriba el numero pasado por parámetros 'num', y devuelve su valor
    //Tu código:
    return Math.ceil(num)

}

function randomNumber(){
    //Devuelve un numero random
    //Tu código:
    return Math.random()
}

function igualQue(num1, num2){
    //comprueba que num1 y num2 sean iguales y retorna
    //en caso que no sean iguales retornará false, caso contrario retornará true
    //Tu código: 
    return num1 == num2
}

function menorQue(num1, num2){
    //comprueba que num1 sea menor que num2  y retorna
    //en caso que no sea menor retornará false, caso contrario retornará true
    //Tu código: 
    return num1 < num2
}

function equalLength(string1, string2){
     //comprueba si string1 tiene la misma longitud que string2 y retorna
    //en caso que no sean iguales retornará false, caso contrario retornará true
    //Tu código
    return string1.length == string2.length
}



module.exports = {
    suma,
    resta,
    multiplicacion,
    resto,
    porcentajeX,
    elevadoAlCubo,
    roundUp,
    randomNumber,
    igualQue,
    menorQue,
    equalLength

}