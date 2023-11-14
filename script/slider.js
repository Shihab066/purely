document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const cards = document.querySelector('.cards');
    const indicatorsContainer = document.querySelector('.indicators');
  
    const cardCount = document.querySelectorAll('.card').length;  
    const cardWidth = 300;
  
    let currentIndex = 0;
  
    // Create indicators
    for (let i = 0; i <= cardCount-4; i++) {
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
    if (currentIndex < cardCount - 4) {
        currentIndex++        
    }
    else {
        currentIndex = 0
    }
      updateSlider();
    }
  
    function startAutoplay() {
      setInterval(nextSlide, 3000); // Adjust the interval as needed (in milliseconds)
    }
  
    startAutoplay();
  });
  