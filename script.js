// Get all the spans
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
});


