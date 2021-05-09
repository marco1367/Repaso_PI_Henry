const Express = require('express');
const app = Express();


//------------------------------------//
//----RUTAS: entre servidor y front---//
//------------------------------------//
app.get('/',(req,res)=>{
    res.send('Hola Mundo!!')
});


//------------------------------------//
//-Coneccion de servidor con localhost//
//------------------------------------//
app.listen(3000, ()=>{
    console.log('el servidor está escuchando el puerto 3000 del local_host');
});