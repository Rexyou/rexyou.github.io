//make the navbar show in mobile size
const icon = document.getElementById("icon"); 
const navbar = document.getElementById("navbar");

icon.addEventListener('click',()=>{
    navbar.classList.toggle('show');
});

//icon change
function myFunction(x) {
    x.classList.toggle("change");
  }