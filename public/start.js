function fetchProducts() {
    fetch("/api/products")
        .then(response => response.json())
        .then(data => {
            console.log("All products:", data);
        });
}

function fetchProductsByID(id) {
    fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Product:", data);
        });
}

fetchProducts();
fetchProductsByID(1);