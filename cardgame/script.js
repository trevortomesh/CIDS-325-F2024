class Card{
    constructor(rank, suit){
        this.rank = rank.toLowerCase();
        this.suit = suit.toLowerCase();
    }

    displayCard(){
        return `${this.rank} of ${this.suit}`;
    }

    getImagePath(){
        return `images/cards/${this.rank}_of_${this.suit}.png`;
    }

    getValue(){
        if(['jack', 'queen', 'king'].includes(this.rank)){
            return 10;
        }else if (this.rank === 'ace'){
            return 11;
        }else {
            return parseInt(this.rank);
        }
    }
}


class Deck{
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.ranks = ['2','3','4','5','6','7','8','9','10',
            'Jack', 'Queen', 'King', 'Ace'];

        this.deck = [];
        this.initializeDeck();
    }

    initializeDeck(){
        for(let suit of this.suits){
            for(let rank of this.ranks){
                this.deck.push(new Card(rank, suit));
            }
        }
    }
    shuffle(){
        for(let i = this.deck.length -1; i >0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [this.deck[i], this.deck[j]] = [this.deck[j],
                this.deck[i]];
        }
    }

    getCards(){
        return this.deck;
    }
}
function displayDeck(deck) {
    const deckContainer = document.getElementById('deckContainer');
    deckContainer.innerHTML = ' ';

    for (let card of deck) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage =
            `url(${card.getImagePath()})`;
        deckContainer.appendChild(cardElement);
    }

}

const deck = new Deck();
displayDeck(deck.getCards());

document.getElementById('shuffleButton').addEventListener('click',() => {
    deck.shuffle();
    displayDeck(deck.getCards());

});


myCard = new Card('Jack','Diamonds');
console.log(myCard);

window.onload = function() {
    // Your JavaScript code here
    alert(myCard.getValue());
};