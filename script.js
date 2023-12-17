const navbar = document.querySelector(".list");
const button = document.querySelector(".button");

document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active");
    console.log("udah ya bang")
};

const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
      console.log("kontol")
    }
});


