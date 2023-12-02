//Definimos las rutas para nuestro server
const {Router} = require('express');
const router = Router();

//Exportamos la función
const {getUsers} = require('../controller/index.controller');
const { createUser, getUserById, deleteUser, updateUSer } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUSer);

module.exports = router; //Obejeto