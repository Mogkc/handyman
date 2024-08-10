const slideCollection = document.getElementsByClassName("slide");
let slideIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    for (const slide of slideCollection) {
        slide.style.display = "none";
    }
    moveSlide(0);
});

function moveSlide(n) {
    slideCollection[slideIndex].style.display = "none";
    slideIndex += n;
    // So the slideshow wraps around beginning < - > end
    slideIndex = Math.abs(slideIndex % slideCollection.length);
    slideCollection[slideIndex].style.display = "block";
}

document.onkeydown = function(event) {
    if (event.key === "ArrowLeft") {
        moveSlide(-1);
      } else if (event.key === "ArrowRight") {
        moveSlide(1);
      }
}
