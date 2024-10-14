// setTimeout(function, delay);
/*function sayHello(){
    alert("Hello, World!");
}

setTimeout(sayHello, 5000);
*/

//setInterval(function, interval);

function updateTime(){
    let date = new Date();
    console.log("Current time: "+
        date.getTime());
}

setInterval(updateTime, 1000);