let x = 0; // Global variable

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("clickButton");

    button.addEventListener("click", function () {
        x++; // Increment the counter
        button.textContent = x; // Update button text
    });
});
