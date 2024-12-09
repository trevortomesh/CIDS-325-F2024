const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(express.json());

//GET Route: Read the current value
app.get('/value', (req, res) => {
   fs.readFile('data.json', (err, data) => {
       if(err){
           res.json({value:''});
       }else{
           res.json(JSON.parse(data));
       }
   });
});

//POST Route: update the value
app.post('/value', (req,res) => {
    const newValue = {value: req.body.value}; //Extract value from request body
    fs.writeFile('data.json', JSON.stringify(newValue), () =>{
        res.sendStatus(200);
    });
});

//Start the server

app.listen(3000, () =>{
    console.log('Server running at http://localhost:3000');
});
