
document.addEventListener('DOMContentLoaded', function() {

const cyclingSpan = document.getElementById('cyclingSpan');

const values = ["->", "-->"];

let currentIndex = 0;

function updateSpan() {
    cyclingSpan.textContent = values[currentIndex];
    currentIndex = (currentIndex + 1) % values.length;
}

setInterval(updateSpan, 1000);

updateSpan();
});   


