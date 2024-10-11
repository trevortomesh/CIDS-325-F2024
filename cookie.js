// var globalVar = "I'm global!";
// let globalLet = "Me too!";
// console.log(window.globalVar);
// console.log(window.globalLet);
// {   //this is a block -- we can use this to limit the
//     // scope of things!
//     let x = 10;
//     console.log(x);
// }
//var name = "alice";
//var name = "bob";
//let name = "alice";
//let name = "bob";
//console.log(x);
//var x = 5;
//console.log(x);

//console.log(y);
//let y = 5;
//console.log(y);

//console.log(name);

// Grab the HTML elements
//let x = "zombies"
//console.log(x);



const scoreDisplay = document.getElementById('score');
const cookie = document.getElementById('cookie');
const button = document.getElementById('autoIncrementButton');

let score = 0; //let is used to declare a variable that can change
// add an event listener to the cookie
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
//}

cookie.addEventListener('click', function(){
    score += 1; //increase score
    scoreDisplay.textContent = score;
    let message = "Your score is: " + score;
    console.log(message);

    //let myLumps = "15"
    //let thing = parseInt(myLumps);
    //console.log("test");
    //let thing = 15
    // if(score === 10){
    //     alert("Congrats! You've clicked 10 cookies!!!");
    //     //console.log("My lumps are " + (thing+6));
    //     //console.log(foo);
    //     //console.log(x);
    // }
    // if(score > 10){
    //     do{
    //         score+=1;
    //         console.log("Score: " + score);
    //     }while(score < 20);
    //
    // }
    // do{
    //     score +=1;
    //
    //     if(score === 5){
    //         console.log("Breaking out of the loop at score 5.");
    //         break;
    //     }
    //     console.log("Score: " + score);
    // }while(score < 10);

    // let multiplier = 2;
    // while(score < 10){
    //     score += multiplier;
    //     console.log("Score: " + score + ", Multiplier: " +
    //     multiplier);
    //     multiplier+=1;
    // }
})

function autoIncrementScore(targetScore){
    while(score < targetScore) {
        increase();

        if (score === targetScore) {
            console.log("Target score reached: " +
            targetScore);
            break;
        }
    }
}

button.addEventListener('click', function(){
    let dice = Math.random()
    if(dice < 0.1) {
        alert("Cheater cheater pumpkin eater!");

        resetScore();
    }
    else{autoIncrementScore(score+10);}
})

function outerFunction(){
    let outerVar = "I'm outside!"

    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction()
}
//outerFunction();

let increase = function(){
    score +=1;
    scoreDisplay.textContent = score;
};

const incrementScore = () => {
    score+=1;
    scoreDisplay.textContent = score;
}

//Function declaration
function resetScore(){
    score = 0;
    scoreDisplay.textContent = score;
}

//Function expression
let reset = function(){
    score = 0;
    scoreDisplay.textContent = score;
};


