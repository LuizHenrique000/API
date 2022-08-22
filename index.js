const express = require('express');
const server = express();
const pokemons = [];
const port = 8080;
server.use(express.json());

server.get("/", (req, res) => res.send("API funcionando"));

server.get('/pokemon', (req, res) => {
    return res.json({ pokemons });
})

server.post('/pokemon', (req, res) => {
    const { name } = req.body;
    pokemons.push(name);
    return res.json(pokemons);
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`));