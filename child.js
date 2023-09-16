
document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_initial_setup');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/initial_setup.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});



document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_howto');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/how_to.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_mklink');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/mklink.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_scoop_winget_git');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/scoop_winget_git.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_androidapps');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/android_apps.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});








document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_android');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/android.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});




document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_pc_apps');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/pc_apps.html", true); // Update the filename here
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});






document.addEventListener('DOMContentLoaded', function() {
    const ccElement = document.getElementById('cc_keymapping');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "content/keymapping.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            ccElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});


