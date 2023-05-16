function fag1() {
    const svg1 = document.getElementById("fagsvg1-1")
    const svg2 = document.getElementById("fagsvg1-2")
    const drop1 = document.getElementById("fag1")
    if (drop1.style.display === "block") {
        drop1.style.display = "none";
        svg1.style.display = "none";
        svg2.style.display = "block";
    } else {
        drop1.style.display = "block";
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
}

function fag2() {
    const svg1 = document.getElementById("fagsvg2-1")
    const svg2 = document.getElementById("fagsvg2-2")
    const drop1 = document.getElementById("fag2")
    if (drop1.style.display === "block") {
        drop1.style.display = "none";
        svg1.style.display = "none";
        svg2.style.display = "block";
    } else {
        drop1.style.display = "block";
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
}

function fag3() {
    const svg1 = document.getElementById("fagsvg3-1")
    const svg2 = document.getElementById("fagsvg3-2")
    const drop1 = document.getElementById("fag3")
    if (drop1.style.display === "block") {
        drop1.style.display = "none";
        svg1.style.display = "none";
        svg2.style.display = "block";
    } else {
        drop1.style.display = "block";
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
}

function fag4() {
    const svg1 = document.getElementById("fagsvg4-1")
    const svg2 = document.getElementById("fagsvg4-2")
    const drop1 = document.getElementById("fag4")
    if (drop1.style.display === "block") {
        drop1.style.display = "none";
        svg1.style.display = "none";
        svg2.style.display = "block";
    } else {
        drop1.style.display = "block";
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
}

function fag5() {
    const svg1 = document.getElementById("fagsvg5-1")
    const svg2 = document.getElementById("fagsvg5-2")
    const drop1 = document.getElementById("fag5")
    if (drop1.style.display === "block") {
        drop1.style.display = "none";
        svg1.style.display = "none";
        svg2.style.display = "block";
    } else {
        drop1.style.display = "block";
        svg1.style.display = "block";
        svg2.style.display = "none";
    }
}

window.onscroll = function() {nav1()};
function myFunction() {
    var navbar = document.getElementById("fiverr1");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }