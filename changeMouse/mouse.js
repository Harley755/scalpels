const cursor = document.getElementsByClassName("cursor")[0];
const body = document.getElementsByTagName("body")[0];

document.addEventListener("mousemove", function(ev) {
    cursor.style.top = ev.clientY;
    cursor.style.left = ev.clientX;
});

const title = document.getElementsByTagName("h1")[0];
title.onmouseover = (ev) => {
    cursor.classList.add('cursor-big');
}

title.onmouseleave = (ev) => {
    cursor.classList.remove('cursor-big');
}

body.onmouseleave = (ev) => {
    // cursor.classList.add('hidecursor');
    cursor.style.display = "none";
}

body.onmouseover = (ev) => {
    // cursor.classList.remove('hidecursor');
    cursor.style.display = "block";
}