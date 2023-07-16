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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

