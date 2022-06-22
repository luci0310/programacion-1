let criptos=['Bitcoin', 'Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron','Cronos','Solana']
//agreagamos elemento al principio, es la consigna B
criptos.unshift('Stellar')
console.log(criptos)

//eliminamos elementos, es la consigna C
const posicion=8;
const numeroElementos=2;
const elementosEliminados=criptos.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(criptos)

//agregamos elemento al final, es la consigna D
criptos.push('Gate')
console.log(criptos)

//guardo la longitud, consgina E-a
const longitud=criptos.length

//guardo el ultimo, consigna E-b
const ultimo=criptos[longitud-1]

//busco su indice, consigna E-c
const indice=criptos.indexOf('Helium')
const muestro=criptos[7]


//creamos la funcion  para imprmir en parrafos, consigna E
const imprimir=()=>{
    document.getElementById("resultados").textContent ="La longitud del arreglo es: " +longitud
    document.getElementById("resultados2").textContent="El ultimo elemento del arreglo es: "+ultimo
    document.getElementById("resultados3").textContent="El indice obtenido: "+indice
    document.getElementById("resultados4").textContent="Con el indice obtenido la criptomoneda es: "+muestro
}

//encontrar/obtener el primer boton y guardarlo en la constante 
const boton=document.getElementById("btn_calcular")
//agregamos un evento a escuchar, en este caso un click
boton.addEventListener("click", imprimir)

//creamos la Listgroup, es la consigna F
function generar(){
    let filas=[]
    //utilizamos un for each para completar la tablas
    criptos.forEach( (element,index) => {
        let fila=`
        <tr>
            <td>${index+1}</td>
            <td>${element}</td>
        </tr>`
        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML=filas.join('')
}   
//creo el segundo boton
const boton2=document.getElementById("calcular")
boton2.addEventListener("click",generar)

