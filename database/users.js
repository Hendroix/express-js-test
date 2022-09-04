let connection;
const QUERIES = {
    USERS: "SELECT * FROM hupe2.x_users LIMIT 100;",
    USER: (id) => {
        return `SELECT * FROM hupe2.x_users WHERE id =${id};`;
    },
    CREATE: (name) => {
        return `INSERT INTO hupe2.x_users VALUES(0, '${name}')`;
    },
};

const connect = async () => {
    const credentials = require("./credentials/credentials");
    const mysql = require("mysql2/promise");
    connection = await mysql.createConnection(credentials);
};

const getAllUsers = async () => {
    return await connection.query(QUERIES.USERS);
};

const getUser = async (req) => {
    return await connection.query(QUERIES.USER(req.params?.id));
};

const createUser = async (name) => {
    const [insertResult] = await connection.query(QUERIES.CREATE(name));
    return insertResult.insertId;
};

connect();

module.exports = { getAllUsers, getUser, createUser };
