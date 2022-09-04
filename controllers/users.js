const users = require("../database/users");
const { acceptsHtml } = require("../public/utility");

const getUsers = async (req, res) => {
    const [rows] = await users.getAllUsers(req, res);

    if (acceptsHtml(req)) {
        const usersMarkup = rows.map(
            (u) => `<li><a href="../users/${u.id}">${u.name}</a></li>`
        );
        res.send(`<ul>${usersMarkup.join("")}</ul>`);
    } else {
        res.send(rows);
    }
};

const getUser = async (req, res) => {
    const [rows] = await users.getUser(req, res);

    if (rows.length === 1) {
        res.send(rows[0]);
    } else {
        res.status(404).send({
            status: 404,
            message: "user not found",
        });
    }
};

const createUser = async (req, res) => {
    const { name } = req.body;
    const insertId = await users.createUser(name);
    res.setHeader("Content-Type", "text/html");
    res.status(201).redirect("/users/" + insertId);
};

module.exports = { getUser, getUsers, createUser };
