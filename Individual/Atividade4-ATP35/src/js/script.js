const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

function index(){
    let frame = document.getElementById("frame");
    frame.src="index.html"
}

function aboutme(){
    let frame = document.getElementById("frame");
    frame.src="about-me.html"
}

function contactme(){
    let frame = document.getElementById("frame");
    frame.src="contact-me.html"
}

function projects(){
    let frame = document.getElementById("frame");
    frame.src="projects.html"
}

function skills(){
    let frame = document.getElementById("frame");
    frame.src="skills.html"
}