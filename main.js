     let fontSize = 16;

const content = document.getElementById('content');


document.getElementById('increase').addEventListener('click', function() {
    fontSize += 2; 
    content.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease').addEventListener('click', function() {
    fontSize -= 2; 
    if (fontSize >= 10) { 
        content.style.fontSize = fontSize + 'px';
    }
});
