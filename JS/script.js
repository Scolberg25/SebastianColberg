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