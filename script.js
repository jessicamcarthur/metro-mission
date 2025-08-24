const character = document.getElementById('kiara');
const container = document.getElementById('scroll-container');

if (character && container) {
  const SPEED = 1.1;
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
      character.play().catch(() => {});
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!character.paused) {
        character.pause();
      }
    }, 130);
  }

  container.addEventListener('scroll', onScroll);
  window.addEventListener('load', moveCharacter);
}