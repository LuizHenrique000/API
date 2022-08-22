const express = require("express");
const app = express();
const port = 3000;
const produtos = [];

app.get("/", (req, res) => res.send("API funcionando"));

app.get("/produtos", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Martelo",
        },
        {
            id: 2,
            name: "Motoserra",
        },
        {
            id: 3,
            name: "Furadeira",
        },
    ];

    produtos.push(products);
    res.json(products);
})

app.listen(port, () => console.log(`Rodando na porta ${port}!`));