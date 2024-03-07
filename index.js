const express = require("express");

const app = express();
const port = 3000;

app.get("/productos", (req, res) => {
    console.log("Holas")
    res.send(`Lista de productos`);
});

app.post("/productos", (req, res) => {
    console.log(req);
    res.send("Agregar producto");
});



app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});