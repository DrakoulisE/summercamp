let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

let prev = document.getElementById("previous");
let next = document.getElementById("next");

const slideArr = [slide1,slide2,slide3];

let curretSlide = 0;

let rotate = true;
window.onload = () => {
    if (rotate) {
        setInterval(() => {
            curretSlide = (curretSlide + 1) % slideArr.length;
            updateSlide();
        }, 5500);
    }
}

function updateSlide() {
    slideArr.forEach(slide => slide.checked = false);
    slideArr[curretSlide].checked = true;
}

next.addEventListener("click", () => {
    curretSlide = (curretSlide + 1) % slideArr.length;
    updateSlide();
})

prev.addEventListener("click", () => {
    curretSlide = (curretSlide - 1 + slideArr.length) % slideArr.length;
    updateSlide();
})

const home_button = document.getElementById("home");
const newsletter_button = document.getElementById("newsletter");
const campsite_button = document.getElementById("campsite");
const contact_button = document.getElementById("contact");

const newsletter_target = document.getElementById("newsletter_target");
const campsite_target = document.getElementById("campsite_target");
const contact_target = document.getElementById("contact_target");

home_button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
})

newsletter_button.addEventListener("click", () => {
    newsletter_target.scrollIntoView({behavior: "smooth"});
})

campsite_button.addEventListener("click", () => {
    campsite_target.scrollIntoView({behavior: "smooth"});
})

contact_button.addEventListener("click", () => {
    contact_target.scrollIntoView({behavior: "smooth"});
})

