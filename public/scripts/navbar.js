let navabar = document.getElementById("nav");
let value = window.scrollY;
let hidden = false;

document.addEventListener("scroll",(e) => {    
    if(!hidden && window.scrollY > value+5){
        navabar.classList.add("hide");
        hidden = true;
    }

    if(window.scrollY < value-5){
        navabar.classList.remove("hide");
        hidden = false;
    }

    value = window.scrollY;
})