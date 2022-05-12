//objetos y array de objetos 
let alumno={
    //guardamos un dato
    nombre:'Emanuel',
    apellido:'Maldonado',
    dni:45798550,
    //guardamos mas de un dato
    correos:{
        outlook:'emanuel@outlook.com',
        gmail:'emanuel@gmail.com',
        yahoo:'emanuel@yahoo.com.ar'
    }
}
/*forma uno
const yahoo=alumno.correos.yahoo
const gmail=alumno.correos.gmail
const outlook=alumno.correos.outlook

console.log(`
correos:

gmail:${gmail}
yahoo:${yahoo}
outlook:${outlook}
`)
*/

//forma dos-destructing object
//es lo mismo q la forma uno pero en una linea
const{yahoo,gmail,outlook}=alumno.correos

console.log(`
correos:

gmail:${gmail}
yahoo:${yahoo}
outlook:${outlook}
`)



