document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the <list> tag
  var listElements = document.querySelectorAll('list');

  // Process each <list> element
  listElements.forEach(function (listElement) {
    // Get the content of the <list> element
    var content = listElement.innerHTML;

    // Process lines and convert those starting with a dash to list items
    var updatedContent = content.replace(/(^|\n)- (.*?)(?=\n|$)/g, function (match, p1, p2) {
      return p1 + '<li class="custom-list">' + p2.trim() + '</li>';
    });

    // Wrap the modified content with <ul> element
    listElement.innerHTML = '<ul>' + updatedContent + '</ul>';
  });
});