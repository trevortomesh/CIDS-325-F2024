//let counter = 10;

const countDownElement = document.getElementById("countdown");
const getTimeElement = document.getElementById("input");
const startButton = document.getElementById("start");

let counter = parseInt(getTimeElement.value);
console.log(counter);
startButton.addEventListener("click", function() {

    let intervalId = setInterval(function () {
        //console.log(t);
        counter--;
        //console.log(countDownElement.textContent);
        //let counterString = counter.toString();
        countDownElement.textContent = counter.toString();

        if (counter === 0) {
            clearInterval(intervalId);
            alert("Happy New Year!!! 🎉🎉🎉");
        }
    }, 1000);
});


// setTimeout(function, delay);
/*function sayHello(){
    alert("Hello, World!");
}

setTimeout(sayHello, 5000);
*/

//setInterval(function, interval);

/*function updateTime(){
    let date = new Date();
    console.log("Current time: "+
        date.toLocaleTimeString());
}

setInterval(updateTime, 1000);*/
/*
let intervalId = setInterval(function(){
    let date = new Date();
    console.log("Current time: "+
        date.toLocaleTimeString());
},1000);

setTimeout(function(){
    clearInterval(intervalId);
},5000);*/
/*
let timeoutId = setTimeout(function(){
    console.log("This will never run!");
}, 5000);

clearTimeout(timeoutId);
 */
/*
function delayedTask(){
    console.log("Task started after delay.");

    setInterval(function (){
        console.log("Repeated task running every 2 seconds");
    },2000);

}

setTimeout(delayedTask,3000);

function animate(){
    // animation here
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

 */