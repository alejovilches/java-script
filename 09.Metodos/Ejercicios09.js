function arrayDuplicados(array){
    // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
    // Tu codigo:
const duplicados = array.map(function(numero){
    return numero * 2
})
return duplicados

}

const nombresPersonas = (array) => {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:
const nombres = array.map(function (persona){
    return persona.name
})
return nombres
}

function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    const productosMasimpuestos = array.map(function(producto){
        producto.impuestos = Math.trunc (producto.precio * 0.1)
        return producto
    })
    return productosMasimpuestos
}

function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:
    const nombresLargos = array.filter(function(name){
        return name.length >= 5
    })
    return nombresLargos
}

function filtaradoPorCategoria(array, categoria){
    // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:
    const pelicula =array.filter(function (categ){
        if (categ.categoria === categoria){
            return categ
        }
        
    })
    return pelicula.map(function (pelicula){
        return pelicula.titulo
    })
}  

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:
    const alumnos = array.filter(function(aprobado){
        return aprobado.nota >= 70 && aprobado.inscripcion === true

    })
    return alumnos
}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈
    
    const contiene = nombres.filter(function(name){
        if (name.includes(search)) {
            return name
        }
        
    })
    return contiene
}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}