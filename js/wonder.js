const wonder_details = document.getElementById("wonder-details")
const slideshow_container = document.getElementById("slideshow-container")
const dots_container = document.getElementById("dots-container")

const displayWonder = ()  => {
    let wonder = JSON.parse(localStorage.getItem('wonder'));
    wonder_details.innerHTML = `
            <h1>${wonder.name}</h1>
            <h3 class='city'>${wonder.location}</h3>
            <p>${wonder.summary}</p>
    `
    let images_body = ``
    let dots =  ``
    wonder.images.forEach((image, index) => {
        images_body +=`
        <div class="mySlides fade">
          <img src="${image}" style="width:100%">
          <div class="text">${wonder.name}</div>
        </div>
        `
        dots +=  `
                  <span class="dot" data-id="${index+1}"></span> 
        `
    })
    images_body += `<a class="prev" id="prev">❮</a> <a class="next" id="next">❯</a>`
    slideshow_container.innerHTML = images_body
    dots_container.innerHTML = dots
    
}
displayWonder()

const prev = document.getElementById("prev")
const next = document.getElementById("next")
let slideIndex = 0;

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

const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n)  => {
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
showSlides(slideIndex);


