//make the navbar show in mobile size
const icon = document.getElementById("icon"); 
const navbar = document.getElementById("navbar");
const navbarlist = document.querySelectorAll(".menulinks");

icon.addEventListener('click', ()=>{

    icon.classList.toggle("change");
    navbar.classList.toggle("show");

});


navbarlist.forEach(

    navbarlist.addEventListener('click',()=>{
        close();
    })       
);

function close(){
    navbar.classList.toggle("hide");
}

close();


//smooth scrolling
var anchorLinks = navbar[0];
	if (window.scrollTo) {
		anchorLinks.addEventListener("click", 
		 function(e) {
			dest = document.getElementById(e.target.href.split("#")[1]);
			window.scroll({top: dest.offsetTop, behavior: 'smooth'});
		})}