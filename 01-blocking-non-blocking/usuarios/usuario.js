function getUsuarioSync(id) {
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= 3000) {
        // Esperando...
        // Haciendo el fetch de base de datos
    }

    return {
        id,
        nombre: `Usuario ${id}`
    }
}

function getUsuario(id, callback) {
    let usuario = {
        id,
        nombre: `Usuario ${id}`
    }

    // Esperando..
    // Haciendo el fetch de base de datos
    setTimeout(() => callback(usuario), 3000)
}


module.exports = {
    getUsuarioSync,
    getUsuario
}