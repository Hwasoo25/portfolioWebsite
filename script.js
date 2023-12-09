// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Example: Add a click event to the "Projects" heading
    const projectsHeading = document.querySelector("#projects h2");

    projectsHeading.addEventListener("click", function() {
        alert("Projects heading clicked! You can add more interactive actions here.");
    });
});
