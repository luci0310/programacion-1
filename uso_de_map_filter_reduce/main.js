//las comas se usan para agregar  
const tareas=[
    {
        nombre:'Testeando soft',
        duracion:25
    },
    {
        nombre:'Implmentación de alta cliente',
        duracion:90
    },
    {
        nombre:'Actualiza cliente',
        duracion:40
    },
    {
        nombre:'Deploy de soft',
        duracion:120
    },
    {
        nombre:'Corrección de bug',
        duracion:180
    }
]

//forma clasica
/*
let nombres=[]
tareas.forEach(element => {
    //con el push inserta la informacion al let y en los parentesis pongo con lo que lo quiero llenar 
    nombres.push(element.nombre)
});*/

//uso del metodo map()
//no es necesaria la palabra return y las llaves, porque se escribe en una linea 
let nombres2= tareas.map(tareas=> tareas.nombre)

/*
USO DE FILTER
*/ 
//cada elemento es una tarea 
let tareas_prolongadas=[]
tareas.forEach(element => {

    if(element.duracion>=120){
        tareas_prolongadas.push(element)
    }

});
console.log(tareas_prolongadas)

//filtrar haciendo uso del metodo filtrar()
//como queda en una linea se puede omitir el return y las llaves 
//
const tareas_prolongadas2= tareas.filter(tarea=>tareas.duracion>=120)
console.log(tareas_prolongadas2)
