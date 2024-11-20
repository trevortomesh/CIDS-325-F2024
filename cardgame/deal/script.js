// Array of sample card images
const cardImages = [
    'images/cards/2_of_hearts.png',
    'images/cards/king_of_spades.png',
    'images/cards/ace_of_diamonds.png',
    'images/cards/10_of_clubs.png'
];

// Function to display cards with animation
function displayCards() {
    const handContainer = document.getElementById('hand');
    handContainer.innerHTML = ''; // Clear existing cards

    // Loop through the card images and animate each one
    cardImages.forEach((imagePath, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage = `url(${imagePath})`;

        // Add animation with delay
        setTimeout(() => {
            cardElement.classList.add('deal-animation');
        }, index * 200); // Staggered delay for each card

        handContainer.appendChild(cardElement);
    });
}

// Event listener for the deal button
document.getElementById('dealButton').addEventListener('click', displayCards);