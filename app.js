var navbar = document.querySelector(".navbar");
var icon = document.querySelector(".burger");
const links = document.querySelectorAll(".navbar li");
const menulinks = document.querySelectorAll(".menulink");

function toggleMenu (){
    navbar.classList.toggle('show');
    icon.classList.toggle("change");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
}

icon.addEventListener('click', toggleMenu);

menulinks.forEach(
    function(menuLink) { 
        menuLink.addEventListener("click", toggleMenu) 
      }
)