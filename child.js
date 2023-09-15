

document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childcontent1');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'initial_setup.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});



document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childcontent2');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'how_to.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childcontent3');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'mklink.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childcontent4');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'scoop.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childcontentandroidapps');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'scoop.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




