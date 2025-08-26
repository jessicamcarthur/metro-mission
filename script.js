const character = document.getElementById('kiara');
const container = document.getElementById('scroll-container');

if (character && container) {
  const SPEED = 1;
  const baseLeft = 0;
  let scrollTimeout;

  character.pause();

  function moveCharacter() {
    const scrollX = container.scrollLeft;
    character.style.left = (baseLeft + scrollX * SPEED) + 'px';
  }

  function onScroll() {
    moveCharacter();

    if (character.paused) {
      character.play().catch(() => { });
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!character.paused) {
        character.pause();
      }
    }, 130);
  }
};

function nextPage(nextPageUrl, points) {
  // Get current total points from localStorage, default to 0
  let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
  
  // Add points from this choice
  totalPoints += points;
  
  // Save updated total points
  localStorage.setItem('totalPoints', totalPoints);
  
  // Go to the next scenario page
  location.href = nextPageUrl;
}

// Update points display on page load
window.onload = function() {
  document.getElementById('score').textContent = localStorage.getItem('totalPoints') || 0;
};