const fs = require('fs');

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

const filename = 'data.json';
let data = readJsonFile(filename);
console.log('Current Data:', data);

const newEntry = {name: 'Diana', age: 28};
data.push(newEntry);

writeJsonFile(filename, data); //write to json

console.log('Updated Data:', readJsonFile(filename));
