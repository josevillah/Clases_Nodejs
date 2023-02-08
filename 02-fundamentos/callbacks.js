// La funcion dentro del settimeot es una callback, una funcion que llama otra funcion en determinado momento
setTimeout(()=>{
    console.log("Hola mundo")
},1000)


const getId = (id, callback) =>{
    const usuario = {
        id,
        nombre: "Jose"
    }

    setTimeout(() =>{
        callback(usuario)
    },1500)
}

getId(10,( {id, nombre} ) =>{
    console.log(id, nombre)
})