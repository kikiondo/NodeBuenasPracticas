let { getUsuario } = require('./usuarios/usuario')

console.log('Inicio de programa')

getUsuario(1, usuario1 => {
    console.log(usuario1)
})


getUsuario(1, usuario2 => {
    console.log(usuario2)
})

console.log('Hola mundo!')