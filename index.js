const express = require("express");
const pagina = require("./pagina.js");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/public/index.html`);
});

app.get("/productos", (req, res) => {
    res.send(pagina("Server Local"));
});

app.post("/productos", (req, res) => {
    console.log(req);
    res.send("Agregar producto");
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});