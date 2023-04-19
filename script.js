// Get the line element
var line = document.getElementById("line");

// Set the initial rotation angle to 0
var angle = 0;

// Define a function to rotate the line
function rotateLine() {
  // Increment the rotation angle
  angle += 1;

  // Set the CSS transform to rotate the line
  line.style.transform = "rotate(" + angle + "deg)";
}

// Call the rotateLine function every 10 milliseconds using setInterval
setInterval(rotateLine, 10);
