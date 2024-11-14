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
    constructor(numDecks = 4) {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.ranks = ['2','3','4','5','6','7','8','9','10',
            'Jack', 'Queen', 'King', 'Ace'];

        this.numDecks = numDecks;
        this.deck = [];
        this.initializeDeck();
    }

    initializeDeck() {
        this.deck = [];
        for (let i = 0; i < this.numDecks; i++) {
            for (let suit of this.suits) {
                for (let rank of this.ranks) {
                    this.deck.push(new Card(rank, suit));
                }
            }
        }
        this.shuffle();
    }
    shuffle(){
        for(let i = this.deck.length -1; i >0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [this.deck[i], this.deck[j]] = [this.deck[j],
                this.deck[i]];
        }
    }

    deal(){
        if(this.deck.length === 0){
            this.initializeDeck();
            alert("Deck reshuffled!");
        }
        return this.deck.pop();
    }

    getCards(){
        return this.deck;
    }
}

class BlackJackGame{
    constructor() {
        this.deck = new Deck();
        this.playerHand = [];
        this.dealerHand = [];
        this.playerCardsDisplayed = 0; //for animation
        this.dealerCardsDisplayed = 0; //for animation
        this.isGameActive = false;
        this.hideDealerCard = true;
        this.setupEventListeners();

    }

    setupEventListeners(){
        document.getElementById('dealButton').addEventListener('click', () =>
            this.startGame());

        document.getElementById('hitButton').addEventListener('click', () =>
            this.playerHit());

        document.getElementById('standButton').addEventListener('click', () =>
            this.playerStand());
    }

    startGame(){
        this.playerCardsDisplayed = 0;
        this.dealerCardsDisplayed = 0;
        document.getElementById('playerHand').innerHTML = ' ';
        document.getElementById('dealerHand').innerHTML = ' ';
        this.showMessage(" ");

        document.getElementById('dealButton').disabled = true;
        document.getElementById('hitButton').disabled = false;
        document.getElementById('standButton').disable = false;

        this.isGameActive = true;
        this.hideDealerCard = true;
        this.playerHand = [this.deck.deal(), this.deck.deal()];
        this.dealerHand = [this.deck.deal(), this.deck.deal()];

        this.updateDisplay();
    }

    playerHit(){
        this.playerHand.push(this.deck.deal());
        this.updateDisplay();

        if(this.calculateScore(this.playerHand) > 21){
            this.checkForBust();
        }
    }

    checkForBust(){
        this.hideDealerCard = false;
        this.updateDisplay();
        this.endGame('Player Bust! Dealer Wins.');
    }

    playerStand(){
        document.getElementById('hitButton').disabled = true;
        document.getElementById('standButton').disable = true;
        this.hideDealerCard = false;

        while(this.calculateScore(this.dealerHand) < 17){
            this.dealerHand.push(this.deck.deal());
        }

        document.getElementById('dealerHand').innerHTML = ' ';
        this.dealerCardsDisplayed = 0;
        this.updateDisplay();
        setTimeout(() =>{
            this.determineWinner();
        }, 500);
    }

    calculateScore(hand){
        let score = hand.reduce((sum, card) => sum + card.getValue(),0);
        let aceCount = hand.filter(card => card.rank === 'ace').length;

        while(score > 21 && aceCount > 0){
            score -=10;
            aceCount -= 1;
        }
        return score;
    }

    updateDisplay(){
        const playerHandDiv = document.getElementById('playerHand');
        const dealerHandDiv = document.getElementById('dealerHand');

        this.displayPlayerHand(playerHandDiv);
        this.displayDealerHand(dealerHandDiv);

        document.getElementById('playerScore').textContent = this.calculateScore(this.playerHand);

        const dealerScore = this.hideDealerCard ? this.calculateScore([this.dealerHand[0]]) :
            this.calculateScore(this.dealerHand);

        document.getElementById('dealerScore').textContent = dealerScore;
    }

    displayPlayerHand(container){
        for(let i = this.playerCardsDisplayed; i < this.playerHand.length; i++){
            this.displayCard(this.playerHand[i], container, i*200);
        }
        this.playerCardsDisplayed = this.playerHand.length;
    }

    displayDealerHand(container){
        for(let i = this.dealerCardsDisplayed; i < this.dealerHand.length; i++) {
            if (i === 1 && this.hideDealerCard) {
                this.displayBackCard(container, i * 200);
            } else {
                this.displayCard(this.dealerHand[i], container, i * 200);
            }
        }
        this.dealerCardsDisplayed = this.dealerHand.length;
    }


    displayCard(card, container, delay=0){
        // fill in later
    }

    displayBackCard(container, delay=0){
        // fill in later
    }

    determineWinner(){
        // fill in later
    }

    endGame(message){
        // fill in later
    }

    showMessage(message){
        // fill in later
    }
}



// function displayDeck(deck) {
//     const deckContainer = document.getElementById('deckContainer');
//     deckContainer.innerHTML = ' ';
//
//     for (let card of deck) {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.style.backgroundImage =
//             `url(${card.getImagePath()})`;
//         deckContainer.appendChild(cardElement);
//     }
//
// }

// const deck = new Deck();
// displayDeck(deck.getCards());
//
// document.getElementById('shuffleButton').addEventListener('click',() => {
//     deck.shuffle();
//     displayDeck(deck.getCards());
//
// });
//
//
// myCard = new Card('Jack','Diamonds');
// console.log(myCard);
//
// window.onload = function() {
//     // Your JavaScript code here
//     alert(myCard.getValue());
// };