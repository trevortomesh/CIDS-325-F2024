class Card{
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    displayCard(){
        return `${this.rank} of ${this.suit}`;
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
}