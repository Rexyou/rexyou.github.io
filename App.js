//make the navbar show in mobile size
var icon = document.querySelector(".icon"); 
var navbar = document.querySelector(".navbar");
var navbarlist = document.querySelectorAll(".menulink");

function toggleBurger (){
    icon.classList.toggle("change");
    navbar.classList.toggle("show");
}

icon.addEventListener('click', toggleBurger);

function checkToggle(e){
    var itemClicked = e.target
    if (itemClicked.classList.contains("menulink")) {
      toggleBurger()
    }
  }
  
  navbar.addEventListener("click", checkToggle)
