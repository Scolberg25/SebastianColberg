function prevPage() {
    window.history.back()
}

function redirectHome() {
    window.location.replace("home")
}

function arrow() {
    document.getElementById('arrow').style.animation="arrowDown 1.1s linear";
    window.location.replace("aboutme");
}

function changeThemeLight() {
    document.getElementById("darkElement").classList.toggle('lightMode');
}

//Auto refresh on window resize
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth;
window.onresize = function(event){
    var t = w.innerWidth || e.clientWidth || g.clientWidth;
    if (window.innerWidth <= 479){
    // load mobile script

        if(window.innerHeight < window.innerWidth){
        document.location.reload(true);
        }
    } else {
        if (t !== x) {
            document.location.reload(true);
        }
    }
}

//Scrambling Text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".homeText").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
    event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
    }
    iteration += 1 / 3;
    }, 30);
}