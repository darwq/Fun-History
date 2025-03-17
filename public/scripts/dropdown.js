let button = document.querySelector(".hamburger-menu");
let dropDown = document.querySelector(".drop-down");

button.addEventListener("click",() => {
    dropDown.classList.add("open");
})
