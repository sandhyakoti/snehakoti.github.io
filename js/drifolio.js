// ==========================================================
//Toys section: Refactor this
//==========================================================


var html = [];
    var toys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var toy_headings = ["Blocks & Building", "Art and Craft Toys", "Creative Toys",
     "Educational Toys", "Puzzles", "Board games", "Learning & Activity Toys",
     "Engineering Systems", "Toy Vehicles"];
    var toy_text = ["Fine Motor Skills<br>Spatial Thinking<br>Creativity", "Creative Fun<br>Art and Maths<br>Pattern Making", "Problem Solving<br>Hand-eye co-ordination<br>Imagination", 
    "Motor Skills<br>Pattern Recognition<br>Early Number Sense",
    "Cognitive Skills<br>Motor Skills<br>Thinking Process", "Logical Thinking<br>Strategy Making<br>Concentration",
    "Academic Readiness<br>Rational Thinking<br>Innovation", "Imagination<br>Intellectual Development<br>Problem Solving",
    "Social Development<br>Emotional Development<br>Exploration"]

$.each(toys, function (i, shot) {
        html.push('<li class="wrapper">');
        html.push('<span class="text">' + toy_text[i]+ '</span>');
        html.push('<img src="img/toy-' + i + '.jpg">');
        html.push('<h3>' + toy_headings[i] + '</h3>');
        html.push('</li>');
    });

$('#shotsByPlayerId').html(html.join(''));

//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })