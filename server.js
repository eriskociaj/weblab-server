const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/welcome", (req, res) => {
    res.send("Welcome to the REST API!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});