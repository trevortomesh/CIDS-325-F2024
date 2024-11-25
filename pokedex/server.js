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

//Pokedex route -- List all pokemon
app.get('/pokedex', (req,res) =>{
    const pokedexList = pokedex.map(
        pokemon => `
        <div style = "border: 1px solid #ddd; padding: 10px;
        margin: 10px; text-align: center;">
        <img src = "${pokemon.image}">
        </div>
        `
    );
});

//Contact route
app.get('/contact', (req, res) => {
    res.send(`
    <h1>Contact Us</h1>
    <p>Email us at: pokemonhub@example.com</p>
`);
});

app.get('/about', (req, res) => {
    res.send(`
    <h1>About Pokemon Trainer Hub</h1>
    <p>This hub helps trainers manager their Pokemon
        and learn about the world of Pokemon!</p>
        `);
});

//404 Error Handler
app.use((req,res) => {
    res.status(404).send(
        `<h1> 404 - Route Not Found </h1>
        <p>You've walked into tall grass without a Pokemon!</p>
    `);
});

app.listen(PORT, () =>{
    console.log(`server running at http://localhost:${PORT}`);
});