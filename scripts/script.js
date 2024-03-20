let lightswitch = document.getElementById("lightswitch");
let bodyTheme = document.querySelector("body").classList;
let projectTitles = document.querySelectorAll(".project-title");
const project1 = document.querySelector("#project-1");
const project1desc = document.querySelector("#project-1-desc");
const project2 = document.querySelector("#project-2");
const project2desc = document.querySelector("#project-2-desc");
const project3 = document.querySelector("#project-3");
const project3desc = document.querySelector("#project-3-desc");
const project4 = document.querySelector("#project-4");
const project4desc = document.querySelector("#project-4-desc");

function persistTheme() {
    if (sessionStorage.getItem("theme") === "light") {
        bodyTheme.replace("theme-dark", "theme-light");
        lightswitch.classList.replace("theme-light", "theme-dark");
        projectTitles.forEach(function (box) { box.classList.replace("theme-light", "theme-dark") });
    }
}

persistTheme();

function switchTheme() {
    if (bodyTheme.contains("theme-dark") === true) {
        bodyTheme.replace("theme-dark", "theme-light");
        lightswitch.classList.replace("theme-light", "theme-dark");
        projectTitles.forEach(function (box) { box.classList.replace("theme-light", "theme-dark") });
        sessionStorage.setItem("theme", "light");
    } else {
        bodyTheme.replace("theme-light", "theme-dark");
        lightswitch.classList.replace("theme-dark", "theme-light");
        projectTitles.forEach(function (box) { box.classList.replace("theme-dark", "theme-light") });
        sessionStorage.setItem("theme", "dark");
    }
}

lightswitch.addEventListener("click", switchTheme);

function toggle1desc() {
    if (project1desc.style.display === "block") {
        project1desc.style.display = "none";
    } else {
        project1desc.style.display = "block";
    }
}

project1.addEventListener("click", toggle1desc);

function toggle2desc() {
    if (project2desc.style.display === "block") {
        project2desc.style.display = "none";
    } else {
        project2desc.style.display = "block";
    }
}

project2.addEventListener("click", toggle2desc);

function toggle3desc() {
    if (project3desc.style.display === "block") {
        project3desc.style.display = "none";
    } else {
        project3desc.style.display = "block";
    }
}

project3.addEventListener("click", toggle3desc);

function toggle4desc() {
    if (project4desc.style.display === "block") {
        project4desc.style.display = "none";
    } else {
        project4desc.style.display = "block";
    }
}

project4.addEventListener("click", toggle4desc);