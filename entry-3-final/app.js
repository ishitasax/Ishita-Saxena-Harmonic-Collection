document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded before applying the animation
  animateReceipt();
});

function animateReceipt() {
  const receipt = document.getElementById("receipt");
  // Add a class to trigger the animation
  receipt.classList.add("fade-in-animation");
}
