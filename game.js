const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2','3','4','5','6','7','8', '9', '10',
    'Jack', 'Queen', 'King', 'Ace'];

//console.log(ranks[0] + " of " + suits[0]);

// let card = {
//     rank: ranks[0],
//     suit: suits[0],
//     displayCard(){
//       return `${this.rank} of ${this.suit}`;
//     }
// };

//card.rank = ranks[11];
//console.log(card.displayCard());
let deck = [];
// for(let i = 0; i < 52; i++){
//     deck[i] = card;
// }

let index = 0;
for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < ranks.length; j++){
        let card = {
            rank: ranks[j],
            suit: suits[i],
            displayCard(){
                return `${this.rank} of ${this.suit}`;
            }
        };

        deck[index] = card;
        index++;
    }
}



let joker = {
    rank: 'Joker',
    suit: 'Hearts',
    displayCard(){
        return `${this.rank} of ${this.suit}`; //template literal
    }
}


deck.pop();
deck.pop();
deck.push(joker);
for( let i=0; i < deck.length; i++){
    console.log(deck[i].displayCard());
}

// most objects have a prototype
let empty = {};
console.log(empty.toString);

//console.log(Object.getPrototypeOf(empty) == Object.prototype);

// console.log(Object.getPrototypeOf(Math) == Object.prototype);
// console.log(Object.getPrototypeOf(Math.max) == Object.prototype);
//
// console.log(Object.getPrototypeOf([]) == Array.prototype);

// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };
//
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEEEEEEEE!!!!");
//
// function makeRabbit(type){
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }
//
// function Rabbit(type){
//     this.type = type;
// }
//
// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} rabbit says '${line}'`);
//
// };
//
// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("I'm a sexy rabbit!");

// class Rabbit{
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
//
// let blackRabbit = new Rabbit("Black");
// blackRabbit.speak("Meow!");