let lightswitch = document.getElementById("lightswitch");
let bodyTheme = document.querySelector("body").classList;
let projectTitles = document.querySelectorAll(".project-title");

function switchTheme() {
    if (bodyTheme.contains("theme-dark") === true) {
        bodyTheme.replace("theme-dark", "theme-light");
        lightswitch.classList.replace("theme-light", "theme-dark");
        projectTitles.forEach(function (box) { box.classList.replace("theme-light", "theme-dark") });
    } else {
        bodyTheme.replace("theme-light", "theme-dark");
        lightswitch.classList.replace("theme-dark", "theme-light");
        projectTitles.forEach(function (box) { box.classList.replace("theme-dark", "theme-light") });
    }
}

lightswitch.addEventListener("click", switchTheme);

document.querySelector("#project-1").addEventListener("click", function () {
    if (document.querySelector("#project-1-desc").style.display = "block") {
        document.querySelector("#project-1-desc").style.display = "none";
    } else {
        document.querySelector("#project-1-desc").style.display = "block"
    }
})