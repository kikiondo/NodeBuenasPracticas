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


function getEmpleado(id){

  return new Promise((resolve, reject)=> {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`)
    } else {
      resolve(empleadoDB);
    }
  })
}

function getSalario(empleado){

  return new Promise((resolve, reject) => {
    
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
      reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      })
    }
  })

}

getEmpleado(3).then((empleado) => {
  getSalario(empleado).then(res => {
    console.log(`El salario de ${res.nombre} es de ${res.salario}`)
  }).catch(err => {
    console.log(err);
  })
})
.catch(err => console.log(err))
