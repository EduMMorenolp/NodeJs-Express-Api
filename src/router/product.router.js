const router = require("express").Router();
const Product = require("../models/product.model");
const path = require('path');


// Renderiza la página de productos
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/products/:product_id", async (req, res) => {
  try {
    const productId = req.params.product_id;
    const product = await Product.findOne({ where: { product_id: productId } });
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Crea un nuevo producto
router.post("/products", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Actualiza un producto existente
router.patch("/products/:product_id", async (req, res) => {
  try {
    const productId = req.params.product_id;
    const updatedProduct = await Product.update(req.body, {
      where: { product_id: productId }, 
    });
    res.status(200).json(`Producto Modificado`);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Elimina un producto existente
router.delete("/products/:product_id", async (req, res) => {
  try {
    const productId = req.params.product_id;
    await Product.destroy({ where: { product_id: productId } });
    res.status(204).json("Producto Eliminado").end();
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
