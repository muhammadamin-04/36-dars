let images = document.querySelectorAll(".slider_images img");
let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
let i = 0;

btnNext.addEventListener("click", () => {
    images[i].classList.remove("active");
    i++;
    if (i > images.length - 1) {
        i = 0;
    }
    images[i].classList.add("active");
});


btnPrev.addEventListener("click", () => {
    images[i].classList.remove("active");
    i--;
    if (i <0 ) {
        i = images.length - 1;
    }
    images[i].classList.add("active");
});

