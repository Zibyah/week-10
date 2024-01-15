// Wrap the code inside a window load event listener
window.addEventListener('load', function() {
    // Get a reference to the arrow element and the intercom element
    var arrowElement = document.getElementById('arrow');
    var intercomElement = document.querySelector('.intercom');

    // Function to toggle the 'intercom' class and rotate the arrow
    function toggleIntercomChat() {
        intercomElement.classList.toggle('intercom-visible');
        arrowElement.classList.toggle('arrow-rotated');
    }

    // Attach the click event to the arrow element
    arrowElement.addEventListener('click', toggleIntercomChat);
});
