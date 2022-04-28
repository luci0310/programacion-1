//crear un array 
//let cuando pretendo cambiar/alterar y const cuando no 
//creamos un arreglo de string 
let series=['breaking bad', 'okupa', 'narco', 'casados con hijos', 'peaky blinders'];

//como conoconcer la longitud de array 
const longitud= series.length
console.log('longitud:'+longitud)

/*como acceder a un elemento haciendo
uso del indice*/ 
const primero=series[0]
console.log('primer elemento:'+primero) 

//como accedo al ultimo elemento 
const ultimo=series[longitud-1]
console.log('el ultimo elemento:'+ultimo)

//recorrer un arreglo haciendo uso de un foreach
series.forEach ((element,index) => {
    console.log(index+'-'+element)
});

//como agregar un elemento al final de un array
series.push('Dragon Ball')
console.log(series)

//como eliminar el ultimo elemento de un arreglo 
series.pop()
console.log(series)

//como agregar un elemento al inicio de un arreglo
series.unshift("grey's anatomy")
console.log(series)

//como elimino el primer elemento de un arreglo 
series.shift()
console.log(series)

//como obtener la posicion de un elemento 
const indice=series.indexOf("casados con hijos")
console.log('indice obtenido: '+indice)

/* cadenas de texto comillas simples*/ 
 
//como eliminar un elemento teniendo su posicion 
//1er caso-eliminar un unico elemento 
series.splice(indice,1)
console.log(series)

//2do caso-eliminar mas de un elemento consecutivo 
const posicion=1;
const numeroElementos=2;
const elementosEliminados=series.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(series)

//splice elimina y slice agrega 

//copiar un array
let copia=series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)



