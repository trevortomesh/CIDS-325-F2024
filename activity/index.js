const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 3000;

// middleware to parse JSON data in request bodies
app.use(express.json());


function readJsonFile(filename){
    try{
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    }catch(error){
        console.error('Error reading the file:', error);
        return [];
    }
}

function writeJsonFile(filename, data){
    try{
        fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
        console.log('File successfully updated!');
    } catch(error){
        console.error('Error writing to file:', error);
    }
}

//get users by id
app.get('/users/:id', (req, res) => {
    const users = readJsonFile('data.json');

    const user = users.find(u => u.id === parseInt(req.params.id));

    //console.log(user);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message: 'User not found'});
    }
});

app.get('/users', (req,res) =>{
    const users = readJsonFile('data.json');
    res.json(users);
});

app.post('/users',(req,res) =>{
    const users = readJsonFile('data.json');
    const newUser = {id: Date.now(), ...req.body};
    users.push(newUser);
    writeJsonFile('data.json', users);
    res.status(201).json(newUser);
});






app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

// const filename = 'data.json';
// let data = readJsonFile(filename);
// console.log('Current Data:', data);
//
// let dude = {};
// dude.name = 'Guy';
// dude.age = 27;
//
// const newEntry = {name: 'Diana', age: 28};
// data.push(newEntry);
// data.push(dude);
//
// writeJsonFile(filename, data); //write to json
//
// console.log('Updated Data:', readJsonFile(filename));
