function prevPage() {
    window.history.back()
}

function redirectHome() {
    window.location.replace("home")
}

function arrow() {
    document.getElementById('arrow').style.animation="rotate 0.3s linear";
    window.location.replace("aboutme");
}