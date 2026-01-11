// 1. Create the button element
var button = document.createElement("button");

// 2. Set the button's text content (label)
button.innerHTML = "Click Me";

// 3. Add an event listener to define what happens when the button is clicked
button.addEventListener("click", function() {
    window.location.href="../pages/home.html";
});

// Optional: Add CSS class for styling
button.className = "my-custom-button";

// 4. Append the button to the container in the HTML body
var container = document.getElementById("button-container");
container.appendChild(button);
