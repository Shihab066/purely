function slider() {
  const slider = document.querySelector('.slider');
  const cards = document.querySelector('.cards');
  const indicatorsContainer = document.querySelector('.indicators');
  const cardCount = document.querySelectorAll('.card').length;
  const card = document.querySelector('.card').clientWidth;
  const cardGap = window.getComputedStyle(cards).gap;
  const cardGapValue = parseInt(cardGap.replace(/\D/g, ''));
  const cardWidth = card + cardGapValue;
  const bodyWidth = document.body.clientWidth;
  let cardPerView = 4;

  if (bodyWidth <= 576 && bodyWidth > 374) {
    cardPerView = 3;
  }

  else if (bodyWidth <= 374) {
    cardPerView = 2;
  }

  let currentIndex = 0;

  // Create indicators
  for (let i = 0; i <= cardCount - cardPerView; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicatorsContainer.appendChild(indicator);

    indicator.addEventListener('click', function () {
      currentIndex = i;
      updateSlider();
    });
  }

  const indicators = document.querySelectorAll('.indicator');

  function updateSlider() {
    const translateValue = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${translateValue}px)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    if (currentIndex < cardCount - cardPerView) {
      currentIndex++
    }
    else {
      currentIndex = 0
    }
    updateSlider();
  }

  function startAutoplay() {
    setInterval(nextSlide, 3000);
  }

  startAutoplay();
};

// setTimeout(slider, 500)