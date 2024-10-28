const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2','3','4','5','6','7','8', '9', '10',
    'Jack', 'Queen', 'King', 'Ace'];

//console.log(ranks[0] + " of " + suits[0]);

let card = {
    rank: ranks[0],
    suit: suits[0],
    displayCard(){
      return `${this.rank} of ${this.suit}`;
    }
};

//card.rank = ranks[11];
//console.log(card.displayCard());
let deck = [];
for(let i = 0; i < 52; i++){
    deck[i] = card;
}

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

for( let i=0; i < deck.length; i++){
    console.log(deck[i].displayCard());
}
