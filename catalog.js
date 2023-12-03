document.addEventListener("DOMContentLoaded", function () {
    // Fetch the catalog data
    fetch('catalog.json')
        .then(response => response.json())
        .then(data => {
            // Process the products and display in HTML
            const productListDiv = document.getElementById('product-list');
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product-box';
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}">
                    <p><strong>Price:</strong> ₱${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <hr>
                `;
                productListDiv.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching catalog data:', error));
});
