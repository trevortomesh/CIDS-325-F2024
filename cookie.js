// Grab the HTML elements
const scoreDisplay = document.getElementById('score');
const cookie = document.getElementById('cookie');
let score = 0; //let is used to declare a variable that can change
// add an event listener to the cookie
cookie.addEventListener('click', function(){
    score += 1; //increase score
    scoreDisplay.textContent = score;
    let message = "Your score is: " + score;
    console.log(message);
    let myLumps = "15"
    let thing = parseInt(myLumps);
    //console.log("test");
    //let thing = 15
    if(score === 10){
        alert("Congrats! You've clicked 10 cookies!!!");
        console.log("My lumps are " + (thing+6));

    }
})

//score += 1;


