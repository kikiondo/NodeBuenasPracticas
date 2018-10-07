// Temple literla

let nombre = 'Carlos'
let real = 'Banana'

console.log(nombre + ' ' + real)

// Template literales
console.log(`${ 1 + 2}`)
console.log(`${nombre} ${real}`)

function getNombre() {
    return `${nombre} ${real}`
}

console.log(`El nombre de: ${getNombre()}`)