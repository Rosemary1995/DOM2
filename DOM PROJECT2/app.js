document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements by their IDs
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");
    
    // Code to execute after DOM content is loaded
    console.log("DOM content loaded");
    // You can put your code here
    
    //  Changing the color of color-box on button click
    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the color-box
function changeBackgroundColor() {
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = getRandomColor();
}

// Adding event listener to the change-color-btn
document.getElementById('change-color-btn').addEventListener('click', changeBackgroundColor);
