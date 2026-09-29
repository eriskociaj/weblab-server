const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/welcome", (req, res) => {
    res.send("Welcome to the REST API!");
});

let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    res.json(product);
});

app.post("/api/products", express.json(), (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.json({
            message: "Name and price are required"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    res.json({
        message: "Product created successfully",
        product: newProduct
    });
});

app.put("/api/products/:id", express.json(), (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);

    product.name = req.body.name;
    product.price = req.body.price;

    res.json({
        message: "Product updated successfully",
        product: product
    });
});

app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const productIndex = products.findIndex(product => product.id === id);

    const deletedProduct = products.splice(productIndex, 1);

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});