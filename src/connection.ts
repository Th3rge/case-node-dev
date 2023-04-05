import knex from "knex";
import dotenv from "dotenv";

//Confirango o dotenv
dotenv.config()

//Conexão com o Banco de Dados
const db = knex({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: 3306,
        multiStatements: true
    }
})

export default db;