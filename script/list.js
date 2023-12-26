document.addEventListener('DOMContentLoaded', function () {
  // Get the content of the <pre> element
  var contentElement = document.getElementById('content');
  var content = contentElement.innerHTML;

  // Process lines and convert those starting with a dash to list items
  var updatedContent = content.replace(/(^|\n)- (.*?)(?=\n|$)/g, function (match, p1, p2) {
    return p1 + '<li>' + p2.trim() + '</li>';
  });

  // Update the content of the <pre> element with the modified content
  contentElement.innerHTML = updatedContent;
});