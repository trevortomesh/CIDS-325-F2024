const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

let pokedex = [
    { id: 'bulbasaur', name: 'Bulbasaur', type: 'Grass/Poison', description: 'A strange seed was planted on its back at birth.', image: '/images/bulbasaur.png' },
    { id: 'charmander', name: 'Charmander', type: 'Fire', description: 'Obviously prefers hot places.', image: '/images/charmander.png' },
    { id: 'squirtle', name: 'Squirtle', type: 'Water', description: 'Shoots water at prey while in the water.', image: '/images/squirtle.png' },
];

app.get('/', (req,res) =>{
    res.send(`
    <h1>Welcome to the Pokemon Trainer Hub!</h1>
    <p>Ready to catch em all?</p>
    <img src="/images/pokeball.png" alt="Pokeball" style="width:150px;">
    `);
});

app.listen(PORT, () =>{
    console.log(`server running at http://localhost:${PORT}`);
});