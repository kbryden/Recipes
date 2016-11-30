//Response, using jQuery, to at least two different user interaction events

$("document").ready(function() {

	$( ".object" ).hover(function() {
	  $( this ).animate({"width":"30em"}, 1000);
	});

	$( ".header-button" ).click(function(){
		$( "video" ).fadeOut(600);
	});

});



//small slideshow for nav W3schools plugin
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("navSlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



