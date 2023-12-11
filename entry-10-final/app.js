function submitAnswer() {
  var userInput = document.getElementById("userInput").value;

  if (userInput.trim() !== "") {
      // Create a new paragraph element
      var newText = document.createElement("p");

      // Set the class for styling
      newText.className = "background-text graffiti-text";

      // Set the text content
      newText.textContent = userInput;

      // Set random position around the textbox
      var xPos = Math.random() * window.innerWidth;
      var yPos = Math.random() * window.innerHeight;

      // Set graffiti-style font family
      newText.style.fontFamily = "GraffitiFont, sans-serif"; // Replace "GraffitiFont" with the actual graffiti font

      // Set random color from the given colors
      var colors = ["#1D3D93", "#682E8C", "#0E6F85", "#44A98B", "#B184CD"];
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      newText.style.color = randomColor;

      // Set a slightly bigger font size
      newText.style.fontSize = "px"; // You can adjust the size as needed

      newText.style.position = "fixed";
      newText.style.left = `${xPos}px`;
      newText.style.top = `${yPos}px`;

      // Append the new text to the body
      document.body.appendChild(newText);

      // Clear the input field
      document.getElementById("userInput").value = "";
  }
}
