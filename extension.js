$(document).ready(function(){
    $('.sidenav').sidenav({closeOnClick:true});
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators:true

  });

setInterval(function(){
   $('.carousel').carousel('next')
   },4000);
$('.parallax').parallax();
$('.scrollspy').scrollSpy({scrollOffset:70});

$('.card1').waypoint(function(direction){

    $('.card1').addClass('animate__animated animate__rotateInDownLeft unopacit');


},{
   offset:'400px'
});

$('.card2').waypoint(function(direction){

    $('.card2').addClass('animate__animated animate__zoomIn unopacit');


},{
   offset:'400px'
});

$('.card3').waypoint(function(direction){

    $('.card3').addClass('animate__animated animate__rotateInDownRight unopacit');


},{
   offset:'400px'
});

$('.card4').waypoint(function(direction){

    $('.card4').addClass('animate__animated animate__rotateInDownLeft  unopacit');


},{
   offset:'400px'
});


$('.card5').waypoint(function(direction){

    $('.card5').addClass('animate__animated animate__zoomIn unopacit');


},{
   offset:'400px'
});


$('.card6').waypoint(function(direction){

    $('.card6').addClass('animate__animated animate__rotateInDownRight unopacit');


},{
   offset:'400px'
});

$('.about_part1').waypoint(function(direction){

    $('.about_part1').addClass('animate__animated animate__slideInLeft unopacit');


},{
   offset:'240px'
});

$('.about_part2').waypoint(function(direction){

    $('.about_part2').addClass('animate__animated animate__slideInRight unopacit');


},{
   offset:'240px'
});

$('.productlists').waypoint(function(direction){

    $('.productlists').addClass('animate__animated animate__heartBeat unopacit');


},{
   offset:'240px'
});

$('.productsoff').waypoint(function(direction){

    $('.productsoff').addClass('animate__animated animate__zoomIn unopacit');


},{
   offset:'240px'
});

  });
