const { crearArchivo } = require('./multiplicar/multiplicar')

let argv = process.argv
let parametro = argv[2],
  base = parametro.split('=')[1]

  console.log(base);

crearArchivo(base)
  .then( archivo => console.log(`Archivo creado: ${ archivo}`))
  .catch( err => console.log(err))