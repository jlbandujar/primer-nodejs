const empleados = [ 
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }

]
const getEmpleado = (id, callback) => {
   
   const promesa = new Promise( ( resolve, reject) => {
       const empleado = empleados.find(e => e.id === id)?.nombre;
       if (empleado){
           resolve( empleado)
       } else {
           reject(`No existe emppleado con id ${id}`);
       }

   });
   return promesa;


}

const getSalario = (id, callback) => {

    return promesa = new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        if (salario) {
            resolve(salario)
        } else {
            reject(`No existe salario con id ${id}`);
        }

    });


}
const id=3;
getEmpleado(id).catch(err => console.log(err)).then(empleado=>console.log(empleado));

getSalario(id)

.then(salario =>console.log( salario ))
.catch(err=>console.log(err));

let empleado;
getEmpleado(id)
.then( empleado => {
    nombre = empleado;
    return getSalario(id)
}).then( salario =>console.log( 'El empleado',nombre,'tiene un salario ',salario))
.catch( err => console.log(err))