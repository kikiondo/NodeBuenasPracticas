let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder} `
    }
}

// Sin destructuración

// let nombre = deadpool.nombre
// let apellido = deadpool.apellido
// let poder = deadpool.poder

// Con destructuración

let { nombre: primerNombre, apellido, poder } = deadpool

console.log(primerNombre, apellido, poder)