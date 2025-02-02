let count = 0; // Counter variable

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;

    // Change color based on count value
    if (count > 0) {
        counterElement.style.color = "green"; // Green for positive numbers
    } else if (count < 0) {
        counterElement.style.color = "red"; // Red for negative numbers
    } else {
        counterElement.style.color = "black"; // Black for zero
    }
}

function increasefunction() {  
    count++;
    updateCounter();
}

function decreasefunction() {  
    count--;
    updateCounter();
}

function resetfunction() {  
    count = 0;
    updateCounter();
}
