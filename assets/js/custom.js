smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 1200, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
gumshoe.init({
  selector: '[data-gumshoe] a', // Default link selector (must use a valid CSS selector)
  selectorHeader: '[data-gumshoe-header]', // Fixed header selector (must use a valid CSS selector)
  container: window, // The element to spy on scrolling in (must be a valid DOM Node)
  offset: 0, // Distance in pixels to offset calculations
  activeClass: 'active', // Class to apply to active navigation link and it's parent list item
  callback: function (nav) {} // Callback to run after setting active link
});
//use window.scrollY
var scrollpos = window.scrollY;
var nav = document.getElementById("side-nav");
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function add_class_on_scroll() {
  nav.classList.add("fade-in");
}

function remove_class_on_scroll() {
  nav.classList.remove("fade-in");
}

window.addEventListener('scroll', function(){
  //Here you forgot to update the value
  scrollpos = window.scrollY;

  if(scrollpos > h - 50 ){
      add_class_on_scroll();
  }
  else {
      remove_class_on_scroll();
  }
  console.log(scrollpos);
});
