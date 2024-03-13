document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const addProductForm = document.getElementById('add-product-form');

    // Función para agregar un nuevo producto
    addProductForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(addProductForm);
        const productName = formData.get('product-name');
        const productPrice = formData.get('product-price');
        const isStock = formData.get('is-stock') === 'on'; // Convertir a booleano

        // Enviar los datos del formulario al servidor
        try {
            const response = await fetch('/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: productName,
                    price: parseFloat(productPrice),
                    inStock: isStock
                })
            });

            if (response.ok) {
                const newProduct = await response.json();
                // Agregar el nuevo producto a la lista
                appendProductToList(newProduct);
                // Limpiar el formulario después de agregar el producto
                addProductForm.reset();
            } else {
                console.error('Error al agregar el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    });

    // Función para cargar la lista de productos
    async function loadProductList() {
        try {
            const response = await fetch('/productos');
            if (response.ok) {
                const products = await response.json();
                products.forEach(product => {
                    appendProductToList(product);
                });
            } else {
                console.error('Error al cargar la lista de productos:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    // Función para agregar un producto a la lista
    function appendProductToList(product) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(listItem);
    }

    // Cargar la lista de productos al cargar la página
    loadProductList();
});
