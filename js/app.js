const CARD_RATINGS = document.querySelectorAll(".card-list-item");
const BTN = document.querySelector(".card-btn");

// Disables btn until rating is selected
BTN.disabled = true;

// Sets active item
const setActive = (e) => {
    [...e.parentElement.children].forEach(sibling => {
        sibling.classList.remove('selected');
    });
    e.classList.add('selected');
}

// Loops through ratings and adds/removes .selected class
CARD_RATINGS.forEach(rating => {
    rating.addEventListener('click', () => {
        const userRating = document.querySelector(".rating");
        userRating.innerHTML = `You selected ${rating.textContent} out of 5`;
        setActive(rating);
        BTN.disabled = false
    });
});

// Shows thank you div after submit
BTN.addEventListener('click', (e) => {
    const ratingCard = document.querySelector('.card-rating');
    const thanksCard = document.querySelector('.card-thanks');

    ratingCard.classList.add('hidden');
    thanksCard.classList.remove('hidden');
});