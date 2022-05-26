const obtener_usuario = async () =>{

    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
 
    const usuarios_definidos = await usuarios.json()
 
    let filas = []
 
    //Recorremos los usuarios
     usuarios_definidos.forEach(element => {
        
 
        let fila = 
        `<tr>
          <td>${element.name}</td>
          <td>${element.username}</td>
          <td>${element.email}</td>
          <td>${element.phone}</td>
        </tr>`
 
        filas.push(fila)
    });
  
    document.getElementById("tbl_body").innerHTML = filas.join('')
 
 }
 
 // Invocamos a la funcion 
 obtener_usuario()  