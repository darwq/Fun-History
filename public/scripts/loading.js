window.addEventListener("load",() => {
    document.querySelector(".loading-screen").classList.add("fade");
    setTimeout(() => {
        document.querySelector(".loading-screen").remove();
    },500)
})