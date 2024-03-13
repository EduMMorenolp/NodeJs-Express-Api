# NodeJS Express API

Esta es una API construida con Node.js y Express para gestionar productos. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos.

<p align="center">
  <a href="">
    <img src="https://skillicons.dev/icons?i=npm,nodejs,express,sequelize&perline=14" />
  </a>
</p>

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:

```bash
npm install
```
* Configura tu base de datos MySQL en el archivo config/database.js.
* Ejecuta la aplicación:

```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

## Uso

La API tiene las siguientes rutas:

* GET /products: Obtiene todos los productos.
* GET /products/:product_id: Obtiene un producto específico por su ID.
* POST /products: Crea un nuevo producto.
* PATCH /products/:product_id: Actualiza un producto existente por su ID.
* DELETE /products/:product_id: Elimina un producto existente por su ID.
Cada ruta espera y devuelve datos en formato JSON.

## Contribución
Si quieres contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork de este repositorio.
Crea una rama nueva (git checkout -b feature/nueva-caracteristica).
Haz tus cambios y haz commit de ellos (git commit -am 'Agrega una nueva característica').
Sube tus cambios a tu repositorio (push to the branch) (git push origin feature/nueva-caracteristica).
Crea una solicitud de extracción (pull request).

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.
