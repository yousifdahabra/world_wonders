const prev = document.getElementById("prev")
const next = document.getElementById("next")
let slideIndex = 0;
showSlides(slideIndex);

prev.addEventListener("click",()=>{
    if(slideIndex > 0){
        slideIndex -= 1;
        currentSlide(slideIndex)
    }
})
next.addEventListener("click",()=>{
    slideIndex += 1;

    currentSlide(slideIndex)
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
        const id = event.target.getAttribute('data-id');
        currentSlide(id)
    });
});
