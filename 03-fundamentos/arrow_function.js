/* 
This con arrow function dentro de nuestro objeto literal solo funcionaria si declaramos global el nombre
pero solo funcionara en el navegador.
*/

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre())