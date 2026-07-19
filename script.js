
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

const API_KEY = "AIzaSyDcuZmtwU_a1YSj37x4OScn5apv9rE20Lk";
const CHANNEL_ID = "UCrOv0_PuC-pBDbpKlcFEvIA";

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`)
.then(response => response.json())
.then(data => {
    let videos = "";

    data.items.forEach(video => {
        if (video.id.videoId) {
            videos += `
            <div>
                <h3>${video.snippet.title}</h3>
                <iframe width="300" height="170"
                src="https://www.youtube.com/embed/${video.id.videoId}"
                frameborder="0" allowfullscreen>
                </iframe>
            </div>`;
        }
    });

    document.getElementById("videos").innerHTML = videos;
});
