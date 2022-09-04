const express = require("express");
const users = require("./controllers/users");
const app = express();
const port = 3000;
// eslint-disable-next-line no-undef
const dirname = __dirname;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(dirname));

app.get("/", (req, res) => {
    res.sendFile(dirname + "/new-user-form.html");
});

app.get("/users", users.getUsers);
app.post("/users", users.createUser);

app.post("/users/:id", users.getUser);
app.get("/users/:id", users.getUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
