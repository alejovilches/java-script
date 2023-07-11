/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame que se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida (nombre, apellido){
return "Bienvenido "+ nombre + " " +  apellido
}
/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
function calc (num1,operador,num2){
    let result = 0
    switch (operador) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
    }
    return result
}



/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paraguas'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp (max,min,porcentaje){
    mensaje = ""
    if (max < 15){
        mensaje = "Es recomendable salir con abrigo"
    } else if (max < 26 && min > 17){
        mensaje = 'El día está lindo'
    } else if (min > 25){
        mensaje = "El día estará caluroso"
    }
    if (porcentaje > 50){
        mensaje += ", recomendable un paraguas"
    }

    return mensaje
}



/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:
function arrayDeStrings (arr){
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5){
            arr2.push(arr[i])
        }
        
    }
    return arr2
}


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
function stringInverso (str){
    let arr = str.split("")
    let rev = arr.reverse()
    return rev.join("") 
}


/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:

function personaMásJoven (arr){
    let masJoven = null
    let temporal = 999
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edad < temporal){
            masJoven = arr[i]
            temporal = arr[i].edad
        }
    }

    return masJoven.nombre
}

/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:
function contadorDeLetras (str){
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]]){
            obj[str[i]]++
        } else{
            obj[str[i]] = 1
        }
    }
    return obj 

}


/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
function sueldoMasAlto (arr){
    let masSueldo = null
    let temporal = 999
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sueldo > temporal){
            masSueldo = arr[i]
            temporal = arr[i].sueldo
        }
    }
    return masSueldo
}

/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:
function aprobados (arr){

let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i].nota >= 80){
        arr2.push (arr[i].nombre)
    }    
}
return arr2
}


/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}