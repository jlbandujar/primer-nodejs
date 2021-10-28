/*setTimeout(() => {console.log('Hola Mundo');
    
}, 1000);*/
const getUsuarioByID = (id, callback) => {
    const usuario = { 
        id: id,
        nombre: 'Fernando'

    }

    setTimeout(() => {
        callback(usuario);
        
    }, 1000);


}
getUsuarioByID(5,(usuario)=>{console.log(usuario)});