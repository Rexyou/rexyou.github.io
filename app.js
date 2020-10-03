var navbar = document.querySelector(".navbar");
var icon = document.querySelector(".burger");
const links = document.querySelectorAll(".navbar li");
const menulinks = document.querySelectorAll(".menulink");

//toggle burger menu when clicked
function toggleMenu (){
    navbar.classList.toggle('show');
    icon.classList.toggle("change");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
}

icon.addEventListener('click', toggleMenu);

//menu link effect
menulinks.forEach(
    function(menuLink) { 
        menuLink.addEventListener("click", toggleMenu);
    }
)

//invoke function when refresh auto back to top
scrollToTop = () =>{window.scrollTo(0, 0);} 
scrollToTop();

//secondpage slider
var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

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

    