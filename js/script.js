document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav.header__nav-wrap a');

  navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          var linkText = link.innerText.trim(); // Extract text from the <a> element
          var eventOptions = {
              event_category: 'Dropdown Menu Option', // Event category
              event_label: linkText // Event label (the text within the <a>)
          };

          // Send event to Google Analytics
          gtag('event', 'click', eventOptions);
      });
  });
});
