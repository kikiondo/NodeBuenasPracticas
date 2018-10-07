console.log('Inicio de prgrama')


setTimeout(() => {
    console.log('Primer timeoout');
}, 3000)

setTimeout(() => {
    console.log('Segundo timeoout');
}, 0)
setTimeout(() => {
    console.log('Tercero timeoout');
}, 0)

console.log('Fin del programa');