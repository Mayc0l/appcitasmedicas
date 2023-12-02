const express = require('express');
const app = express();

//middlewares ejecuta funciones antes de que llegan a las rutas.
app.use(express.json()); //para manipular app cliente desde json
app.use(express.urlencoded({extended: false})); //permite procesar datos y pasarlo a un objeto

//routes a procesar
app.use(require('./routes/route'));

app.listen(3000);
console.log('Server on port 3000');