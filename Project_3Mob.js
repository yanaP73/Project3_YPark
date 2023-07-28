/*$(document).ready(function() {
    $("#avatar").on("click", function() {
       
    });
});*/

/*$(document).ready(function() {
    $("href").on({
        "mouseover": function(){
            if($(this).id("avatar").match(/index.html/)){
                alert("This is avatar!")
        }
          },
    "mouseover" : function(){
        if($(this).id("thumbnail").match(/index.html/)){
            alert("This is thumnail!")
        }
    }
    });
});
*/

//Slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/*Need explanation of this code*/
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*Side Menu*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*Cart Window*/
/*How to make a cart widow appear on click and dissapear on another 
click https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown  */

// Get the button, and when the user clicks on it, execute openCloseWindow function
document.getElementByClass("openCloseBtn").onclick = function() {openCloseWindow()};

/* openCloseWindow toggles between adding and removing the show class, 
which is used to hide and show the Cart Window */
function openCloseWindow() {
    document.getElementById("cartWindow").classList.toggle("show");
  }




