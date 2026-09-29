// Assignment 2: Fetch all products or one product by ID.
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

// Assignment 3: Send a POST request to add a product.
function addProduct(name, price) {
    fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("POST response:", data);
        });
}

// Assignment 4: Send a PUT request to update a product.
function updateProduct(id, name, price) {
    fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("PUT response:", data);
        });
}

// Assignment 5: Send a DELETE request to remove a product.
function deleteProduct(id) {
    fetch(`/api/products/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => {
            console.log("DELETE response:", data);
        });
}