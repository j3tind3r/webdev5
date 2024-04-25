document.addEventListener("DOMContentLoaded", function() {
    var welcomeElement = document.getElementById("welcome");

    // Function to animate the welcome sign
    function animateWelcome() {
        welcomeElement.style.left = "calc(50% - " + welcomeElement.offsetWidth / 2 + "px)"; // Transition to the middle
    }

    // Start animation when the page is loaded
    animateWelcome();
});
