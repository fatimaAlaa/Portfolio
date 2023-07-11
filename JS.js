const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-div');
    
    elements.forEach(function(element) {
      const positionFromTop = element.getBoundingClientRect().top;
      const positionFromBottom = element.getBoundingClientRect().bottom;
      
      // if the top of the element is less than the innerHeight (bottom of viewport)
      // and the bottom of the element is greater than 0 (top of viewport)
      // then the element is in view
      if (positionFromTop - window.innerHeight <= 0 && positionFromBottom >= 0) {
        element.classList.remove('hidden');
        element.classList.add('fade-in');
      } else {
        element.classList.remove('fade-in');
        element.classList.add('hidden');
      }
    });
  });