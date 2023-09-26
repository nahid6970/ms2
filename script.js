/* For Showing Markdown Table in HTML properly but lines also show */
 function parseMarkdownTable(markdown) {
  const rows = markdown.trim().split('\n');
  const headers = rows[1].split('|').map(header => header.trim()).filter(Boolean);
  const data = rows.slice(2, -1).map(row => row.split('|').map(cell => cell.trim()).filter(Boolean));

  return { headers, data };
}

function renderTable(headers, data) {
  const tableElement = document.createElement('table');
  const theadElement = document.createElement('thead');
  const tbodyElement = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  headers.forEach(header => {
      const thElement = document.createElement('th');
      thElement.textContent = header;
      headerRow.appendChild(thElement);
  });

  theadElement.appendChild(headerRow);

  data.forEach(rowData => {
      const rowElement = document.createElement('tr');
      rowData.forEach(cellData => {
          const tdElement = document.createElement('td');
          tdElement.textContent = cellData;
          rowElement.appendChild(tdElement);
      });
      tbodyElement.appendChild(rowElement);
  });

  tableElement.appendChild(theadElement);
  tableElement.appendChild(tbodyElement);

  return tableElement;
}

function convertMarkdownTables() {
  const elements = document.querySelectorAll('[id^="markdown-table-"]');
  elements.forEach(element => {
      const markdownContent = element.innerHTML;
      const { headers, data } = parseMarkdownTable(markdownContent);
      const tableElement = renderTable(headers, data);
      element.innerHTML = ''; // Clear the original content
      element.appendChild(tableElement);
  });
}

// Call the function to convert Markdown tables on page load
window.addEventListener('load', convertMarkdownTables); 
 






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



















/* // Get all the spans
const spans = document.querySelectorAll('span');

// Find the span with the maximum width
let maxWidth = 0;
spans.forEach(span => {
  const width = span.offsetWidth;
  if (width > maxWidth) {
    maxWidth = width;
  }
});

// Set the width of all spans to the maximum width
spans.forEach(span => {
  span.style.width = `${maxWidth}px`;
}); */













