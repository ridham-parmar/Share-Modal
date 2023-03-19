// let elementOpen = document.querySelector(".modal-box");
// let elementClose = document.querySelector("#close-modal");
// let overlayElement = document.querySelector(".overlay");

// function modalOpen() {
//     elementOpen.classList.add('open');
//     overlayElement.classList.add('overlay-opacity');
// }

// elementClose.addEventListener('click', function() {
//     elementOpen.classList.remove('open');
//     overlayElement.classList.remove('overlay-opacity');
// });


let openElement = document.querySelector(".modal-box");
let overlayElement = document.querySelector('.overlay');

function modalOpen() {
    openElement.classList.add('open');
    overlayElement.classList.add('overlay-active');
}

function modalClose() {
    openElement.classList.remove('open');
    overlayElement.classList.remove('overlay-active');
}