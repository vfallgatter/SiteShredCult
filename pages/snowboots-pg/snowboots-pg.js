let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function mostrarSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function avancar() {
    index = (index + 1) % totalSlides;
    mostrarSlide();
}

function voltar() {
    index = (index - 1 + totalSlides) % totalSlides;
    mostrarSlide();
}


setInterval(() => {
    avancar();
}, 6000);


filterSelection("all");

function filterSelection(c) {
    const x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
        if (x[i].className.indexOf(c) > -1) {
            x[i].classList.add("show");
        }
    }
}

const btnContainer = document.getElementById("button_container");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        this.classList.add("active");
    });
}
