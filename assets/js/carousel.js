(function () {
  var slides   = document.querySelectorAll('.carousel-track .slide');
  var captions = document.querySelectorAll('.slide-caption');
  var dots     = document.querySelectorAll('.dot');
  if (!slides.length) return;

  var current = 0;
  var timer;

  function go(n) {
    slides[current].classList.remove('active');
    captions[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    captions[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () { go(current + 1); }, 5000);
  }

  document.querySelector('.carousel-btn.prev').addEventListener('click', function () {
    go(current - 1);
    startTimer();
  });

  document.querySelector('.carousel-btn.next').addEventListener('click', function () {
    go(current + 1);
    startTimer();
  });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      go(i);
      startTimer();
    });
  });

  startTimer();
}());
