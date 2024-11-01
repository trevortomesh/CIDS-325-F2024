function displayDeck(deck) {
    const deckContainer = document.getElementById('deckContainer');
    deckContainer.innerHTML = ' ';

    for (let card of deck) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML =`
            <span>${card.rank}</span>
            <span>${card.suit}</span>
            `;
        deckContainer.appendChild(cardElement);
    }

}

const deck = new Deck();
displayDeck(deck.getCards());

document.getElementById('shuffleButton').addEventListener('click',() => {
    deck.shuffle();
    displayDeck(deck.getCards());

});