// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
    animation: "fade",
    controlNav: "thumbnails",
    directionNav: true,
    slideshow: false,
    slideshowSpeed: 5000,
    animationSpeed: 600,
    touch: true
    });
});