const character = document.getElementById('kiara');
const container = document.getElementById('scroll-container');

if (character && container) {
  const SPEED = 1;
  const baseLeft = 0;
  let scrollTimeout;

  character.pause(); // works only if #kiara is <video> or <audio>

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

  container.addEventListener("scroll", onScroll);
}

if (localStorage.getItem("score") === null) {
  localStorage.setItem("score", 0);
}

function nextPage(url, points) {
  let currentScore = parseInt(localStorage.getItem("score")) || 0;
  currentScore += points;
  localStorage.setItem("score", currentScore);
  window.location.href = url;
}

function displayScore() {
  let score = localStorage.getItem("score") || 0;
  const scoreBar = document.createElement("div");
  scoreBar.id = "score-bar";
  scoreBar.innerText = `Points: ${score}`;
  document.body.appendChild(scoreBar);
}
displayScore();