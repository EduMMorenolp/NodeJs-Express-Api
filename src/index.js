const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./router/product.router");
const path = require('path');

const port = process.env.PORT || 3000;

// Inicializar la aplicación Express
const expressApp = express();

// Utilizar body-parser para parsear solicitudes JSON
expressApp.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
expressApp.use(express.static(path.join(__dirname, '../public')));

// Usar el enrutador de productos
expressApp.use("/", productRouter);

// Arrancar el servidor
expressApp.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
