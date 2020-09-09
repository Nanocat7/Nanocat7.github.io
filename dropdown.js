 var myVar;

 function myFunction() {
   myVar = setTimeout(showPage, 3000);
 }

 function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("myDiv").style.display = "block";
 }

// When the user scrolls the page, execute myFunction
window.onscroll = function() {Scroll()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
