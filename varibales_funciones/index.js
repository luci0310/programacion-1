//funcion basica
function mostrar_mensaje(){
    //popup
    alert("probando mi funcion")
}
function mostrar_en_consola(){
    //asignamos una cadena de string en una constante 
    const nombre_apellido='Luciana Martinez'

    //forma 1-sin template string
    console.log('nombre y apellido:'+nombre_apellido)

    //forma2-template string
    console.log(`
    Nombre y apellido:${nombre_apellido}
    DNI:45798550
    direccion:lago hess 730
    `)
}
//condicionales
function validar(){
    const calificacion=prompt('ingrese su calificacion')
    
    if(calificacion>=7){
        alert('estas aprobado')
    }else{
        alert('nos vemos en febrero')
    }
}
