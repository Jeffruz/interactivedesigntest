let counter = document.getElementById('counter'); 
let count = 0;

function incrementCounter() { 
    count++; counter.textContent = count; 
    if (count < 480) { 
        requestAnimationFrame(incrementCounter); 
    } 
} 
requestAnimationFrame(incrementCounter);


