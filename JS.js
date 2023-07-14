document.addEventListener('mousemove', e => {
  const cursor = document.getElementById('cursor');
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.scroll-div');

  elements.forEach(function (element) {
    const positionFromTop = element.getBoundingClientRect().top;
    const positionFromBottom = element.getBoundingClientRect().bottom;

    if (positionFromTop - window.innerHeight <= 0 && positionFromBottom >= 0) {
      element.classList.remove('hidden');
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
      element.classList.add('hidden');
    }
  });
});