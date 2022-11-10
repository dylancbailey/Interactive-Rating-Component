let cardRatings = document.querySelectorAll(".card-list-item");

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