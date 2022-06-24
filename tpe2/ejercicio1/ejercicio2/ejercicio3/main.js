//objetos
const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
        lenguaje: 'TypeScript',
        patron: 'MVVM',
        spa: 'si'
    },
}

//creo una funcion flecha 
const mostrar=()=>{

    const{titulo,nombre}=framework
    console.log(`el titulo es:`+titulo)
    console.log(`el nombre es:`+nombre)

    const{lenguaje,patron,spa}=framework.características
    console.log(`el lenguaje es:`+lenguaje)
    console.log(`el patron es:`+patron)
    console.log(`el spa es:`+spa)
}
//creo el boton para mostrar en consola 
const boton=document.getElementById("mostrar")
boton.addEventListener("click",mostrar)