const cardRatings = document.querySelectorAll(".card-list-item");
const btn = document.querySelector(".card-btn");
const ratingNumber = document.querySelector(".rating");

btn.disabled = true;

cardRatings.forEach(rating => {
    rating.addEventListener('click', () => {
        setActive(rating);
        btn.disabled = false;
        ratingNumber.innerHTML = `You selected ${rating.textContent} out of 5`;
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