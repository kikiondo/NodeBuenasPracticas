let empleados = [
  {
    id: 1,
    nombre: "Carlos"
  },
  {
    id: 2,
    nombre: "Beba"
  },
  {
    id: 3,
    nombre: "Angel"
  }
]

let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
]

function getEmpleado(id, callback){
  let empleadoDB = empleados.find(empleado => empleado.id === id)
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`)
  } else {
    callback(null, empleadoDB);
  }
};

function getSalario(empleado, callback){
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No se encontró un salario para el empleado ${empleado.nombre}`)
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    })
  }
}

// Utilizamos las funciones que hemos creado, pasandoles nuestro callback
getEmpleado(2, (err, empleado) => {
  if (err) return console.log(err)

  getSalario(empleado, (err, res) => {
    if(err)
      return console.log(err)
    
      console.log(`El salario de ${res.nombre} es de ${res.salario}$`)
  })
})
