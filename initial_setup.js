

document.addEventListener('DOMContentLoaded', function() {
    const childContentElement = document.getElementById('childContent');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'initial_setup.html', true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            childContentElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
