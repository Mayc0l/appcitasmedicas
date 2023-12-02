const {Pool } = require('pg'); //conexión a Postgres
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'citasmedicas',
    port: '5432'
});

//Aquí van todas las funciones, las cuales serán exportadas.
const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(res.rows);
};
//Para obtener un usuario en concreto
const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from users where id = $1', [id]);
    res.json(response.rows);
}
//PAra insertar usuearios
const createUser = async (req, res) => {
    const {nombre, apellido} = req.body;

    const response = await  pool.query('insert into users (nombre, apellido) values ($1, $2)',[nombre, apellido])
    console.log(response);
    res.json({
        message: 'Uusario agregado correctamente',
        body: {
            user: {nombre, apellido}
        }
    });
}
//Para actualizar usuarios
const updateUSer = async (req, res) => {
    const id = req.params.id;
    const {nombre, apellido} = req.body;
    const response = await pool.query('update users set nombre = $1, apellido = $2 where id = $3',[
        nombre,
        apellido,
        id
    ]);
    console.log(response);
    res.json('Usuario actualizado correctamente');
};
//Para eliminar usuario
    const deleteUser = async (req, res) => {
        const id = req.params.id;
        const response = await pool.query('delete from users where id = $1', [id]);
        console.log(response);
        res.json(`User ${id} Eliminado correctamente`);
};
//Para exportar las funciones
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUSer
}