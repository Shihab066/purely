function slider2() {
    const slider = document.querySelector('.best-deals-slider');
    const cards = document.querySelector('.best-deals-cards');
    const indicatorsContainer = document.querySelector('.indicators1');
    const cardCount = document.querySelectorAll('.best-deals-card').length;
    const card = document.querySelector('.best-deals-card').clientWidth;
    const cardGap = window.getComputedStyle(cards).gap;
    const cardGapValue = parseInt(cardGap.replace(/\D/g, ''));
    const cardWidth = card + cardGapValue;
    const bodyWidth = document.body.clientWidth;
    let cardPerView = 2;
    
    // if (bodyWidth <= 576 && bodyWidth > 374) {
    //   cardPerView = 3;
    // }
  
    // else if (bodyWidth <= 374) {
    //   cardPerView = 2;
    // }
  
    let currentIndex = 0;
  
    // Create indicators
    for (let i = 0; i <= cardCount - cardPerView; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator1');
      indicatorsContainer.appendChild(indicator);
  
      indicator.addEventListener('click', function () {
        currentIndex = i;
        updateSlider();
      });
    }
  
    const indicators = document.querySelectorAll('.indicator1');
  
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
  
  setTimeout(slider2, 500)