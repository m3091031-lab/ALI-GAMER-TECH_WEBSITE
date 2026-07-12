
// Welcome Message
window.onload = function () {
    console.log("Welcome to ALI GAMER TECH!");
};

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Back to Top Button
const topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.id = "topBtn";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.display = "none";
document.body.appendChild(topButton);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
