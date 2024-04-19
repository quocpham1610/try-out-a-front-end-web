$(document).ready(function () {
    // Initialize Slick Slider
    $('.slick-slider').slick();

    // Toggle dark mode
    $('.toggle-dark-mode').click(function () {
        $('body').toggleClass('dark-mode');
    });

    // Scroll animation
    $('nav ul li a, .login button').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
});
