let consolas=['Play Station','Xbox','nintendo Game Cube','Sepa DreamCast','Game Boy Advanced']

//elimino los dos elementos
const posicion=2;
const numeroElementos=2;
const elementosEliminados=consolas.splice(posicion,numeroElementos)

//muestro en la consola los elementos eliminados
console.log(elementosEliminados)

//muestro en la consola los elementos que quedaros
console.log(consolas)

//agrego elemento al final del array
consolas.push('Nintendo 64')

//muestro en la consola
console.log(consolas)

//agrego elemento al inicio del array
consolas.unshift('Nintendo wii')

//muestro en consola
console.log(consolas)

//guardo en constantes 
//guardo la longitud
const longitud=consolas.length

//guardo el ultimo
const ultimo=consolas[longitud-1]

//guardo el primero 
const primero=consolas[2]

//creó funcion flecha y muestro 
const imprimir=()=>{
    document.getElementById("resultados").textContent ="La longitud del arreglo es:" +longitud
    document.getElementById("resultados1").textContent ="El ultimo elemento del arreglo es:" +ultimo
    document.getElementById("resultados2").textContent ="El indice del arreglo es:" +primero
}

//encontrar/obtener el boton y guardarlo en la constante 
const boton=document.getElementById("btn_calcular")


//agregamos un evento a escuchar, en este caso un click
boton.addEventListener("click", imprimir)


//funcion tradicional
function generar(){
    let filas=[]
    //utilizamos un for each para completar la tablas
    consolas.forEach( (element,index) => {
        let fila=`
        <tr>
            <td>${index+1}</td>
            <td>${element}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML=filas.join('')
}

const boton2=document.getElementById("calcular")
boton2.addEventListener("click",generar)
