document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the <list> tag
  var listElements = document.querySelectorAll('list');

  // Process each <list> element
  listElements.forEach(function (listElement) {
    // Get the content of the <list> element
    var content = listElement.innerHTML;

    // Process lines and convert those starting with a dash to list items
    var updatedContent = content.replace(/(^|\n)( *)- (.*?)(?=\n|$)/g, function (match, p1, p2, p3) {
      var indentLevel = p2.length / 2; // Assuming each level of indentation is 2 spaces
      var listItem = '<li class="custom-list">' + p3.trim() + '</li>';
      
      // Create nested lists based on the indent level
      if (indentLevel > 0) {
        return p1 + '<ul>'.repeat(indentLevel) + listItem + '</ul>'.repeat(indentLevel);
      } else {
        return listItem;
      }
    });

    // Wrap the modified content with <ul> element
    listElement.innerHTML = '<ul>' + updatedContent + '</ul>';
  });
});