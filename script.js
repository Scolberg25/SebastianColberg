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

//Image Carousel
var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 10000); // Change image every 2 seconds
}