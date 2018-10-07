// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000)

// Haciendo nuestros callbacks

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Carlos',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${id} no existe en la base de datos`)
    } else {
        callback(null, usuario)
    }
}

getUsuarioById(10, (err, usuario) => {

    // Error de la callback
    if (err) {
        return console.log(err)
    }
    // True de la callback
    console.log(`Usuario de BD`, usuario)
})