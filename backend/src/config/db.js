

import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:"root",
    password:"",
    database:"empleados_crud"

});

export default connection.promise();