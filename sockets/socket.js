

const {io}= require('../index')
// mensajes de sockets

io.on('connection', client => {
    console.log('cliente Conectado');
   
    client.on('disconnect', () => {
        console.log('cliente desconectdo');
     });
     client.on('mensaje',(payload)=> {
         console.log('mensaje',payload);

         io.emit('mensaje',{admin:'Nuevo Mensaje'})
     });
  });