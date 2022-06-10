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

//creó funcion flecha
const calcular=(consolas)=>{
    //muestro la longitud 
    const longitud= consolas.length
    ('longitud:'+longitud)
    //muestro ultimo elemento del arreglo 
    const ultimo=consolas[longitud-1]
    ('el ultimo elemento:'+ultimo)
    //mostrar elemento 
    const primero=consolas[1]
    ('nuestro elemento'+primero) 
}
const mostrar=()=>{
    //invoco la funcion calcular
    const respuesta=calcular(consolas)
    document.getElementById("h_resultado").textContent=respuesta
}

//encontrar/obtener el boton y guardarlo en la constante 
const boton=document.getElementById("btn_calcular")
//agregamos un evente a escuchar, en este caso un click
boton.addEventListener("click", mostrar)

//funcion tradicional
async function calculo(){
    let filas=[]
    consolas.forEach(element => {
        let fila=
        <tr>
            <td></td>
            <td></td>
        </tr>
        filas.push()
    });
}

function mostrar(){
    const respuesta=calculo()
    document.getElementById("t_resultado").textContent=respuesta
}
