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