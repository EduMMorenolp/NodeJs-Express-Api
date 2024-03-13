document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');
    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const isStockCheckbox = document.getElementById('is-stock');
    const submitButton = document.getElementById('submit-btn');
    const clearButton = document.getElementById('clear-btn');

    // Función para limpiar el formulario
    const clearForm = () => {
        productIdInput.value = '';
        productNameInput.value = '';
        productPriceInput.value = '';
        isStockCheckbox.checked = false;
        submitButton.innerText = 'Guardar';
    };

    // Función para mostrar la lista de productos
    const showProductList = async () => {
        try {
            const response = await fetch('/products');
            console.log(response);
            const products = await response.json();
            productList.innerHTML = '';
            products.forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span><strong>Nombre:</strong> ${product.product_name}</span><br>
                    <span><strong>Precio:</strong> $${product.product_price.toFixed(2)}</span><br>
                    <span><strong>En Stock:</strong> ${product.is_stock ? 'Sí' : 'No'}</span><br>
                    <button class="edit-btn" data-id="${product.product_id}">Editar</button>
                    <button class="delete-btn" data-id="${product.product_id}">Eliminar</button>
                `;
                productList.appendChild(li);
            });

            // Agregar event listeners a los botones de editar y eliminar
            document.querySelectorAll('.edit-btn').forEach(button => {
                button.addEventListener('click', async () => {
                    const productId = button.getAttribute('data-id');
                    const response = await fetch(`/products/${productId}`);
                    const product = await response.json();
                    productIdInput.value = product.product_id;
                    productNameInput.value = product.product_name;
                    productPriceInput.value = product.product_price;
                    isStockCheckbox.checked = product.is_stock;
                    submitButton.innerText = 'Actualizar';
                });
            });

            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', async () => {
                    const productId = button.getAttribute('data-id');
                    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar este producto?');
                    if (confirmDelete) {
                        await fetch(`/products/${productId}`, { method: 'DELETE' });
                        showProductList();
                        clearForm();
                    }
                });
            });
        } catch (error) {
            console.error('Error al obtener la lista de productos:', error);
        }
    };

    // Mostrar la lista de productos al cargar la página
    showProductList();

    // Agregar event listener para el envío del formulario
    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(productForm);
        const productData = {
            product_name: formData.get('product-name'),
            product_price: parseFloat(formData.get('product-price')),
            is_stock: formData.get('is-stock') === 'on'
        };

        if (productIdInput.value) {
            // Actualizar producto existente
            await fetch(`/products/${productIdInput.value}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
        } else {
            // Crear un nuevo producto
            await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
        }

        // Limpiar el formulario y mostrar la lista de productos actualizada
        clearForm();
        showProductList();
    });

    // Agregar event listener para el botón de limpiar
    clearButton.addEventListener('click', () => {
        clearForm();
    });
});
