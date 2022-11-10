const cardRatings = document.querySelectorAll(".card-list-item");
const btn = document.querySelector(".card-btn");

cardRatings.forEach(rating => {
    rating.addEventListener('click', () => {
        setActive(rating);
    });
});
const setActive = (e) => {
    [...e.parentElement.children].forEach(sibling => {
        sibling.classList.remove('selected');
    });
    e.classList.add('selected');
}

btn.addEventListener('click', (e) => {
    const ratingCard = document.querySelector('.card-rating');
    const thanksCard = document.querySelector('.card-thanks');

    ratingCard.classList.add('hidden');
    thanksCard.classList.remove('hidden');
});