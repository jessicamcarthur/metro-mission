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
    if (character.paused) character.play().catch(() => {});
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!character.paused) character.pause();
    }, 130);
  }

  container.addEventListener("scroll", onScroll);
}

if (!sessionStorage.getItem("score")) sessionStorage.setItem("score", "0");

let unlocked = JSON.parse(sessionStorage.getItem("unlocked") || '{"seedySammy":false,"martinMince":false,"chippieCharlie":false}');

function saveUnlocked() {
  sessionStorage.setItem("unlocked", JSON.stringify(unlocked));
}

function displayScore() {
  const pagesWithScore = [
    "scenario1.html", "scenario1a.html", "scenario1aa.html", "scenario1ab.html", "scenario1ac.html", "scenario1b.html", "scenario1ba.html", "scenario1bb.html", "scenario1bc.html", "scenario1c.html", "scenario1ca.html", "scenario1cb.html", "scenario1cc.html",
    "scenario2.html", "scenario2a.html", "scenario2aa.html", "scenario2ab.html", "scenario2ac.html", "scenario2b.html", "scenario2ba.html", "scenario2bb.html", "scenario2bc.html", "scenario2c.html", "scenario2ca.html", "scenario2cb.html", "scenario2cc.html",
    "scenario3.html", "scenario3a.html", "scenario3aa.html", "scenario3ab.html", "scenario3ac.html", "scenario3b.html", "scenario3ba.html", "scenario3bb.html", "scenario3bc.html", "scenario3c.html", "scenario3ca.html", "scenario3cb.html", "scenario3cc.html",
    "trainstation.html", "traininterior.html"
  ];

  const currentPage = window.location.pathname.split("/").pop();

  if (!pagesWithScore.includes(currentPage)) return;

  let scoreBar = document.getElementById("score-bar");
  const score = parseInt(sessionStorage.getItem("score"));

  if (!scoreBar) {
    scoreBar = document.createElement("div");
    scoreBar.id = "score-bar";
    scoreBar.innerHTML = `
      <span class="score-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512">
          <path fill="#ffe202" stroke="#ffffffff" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"/>
          <path fill="none" stroke="#ffe202" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"/>
        </svg>
      </span>
      <span class="score-text">${score}/100</span>
    `;
    document.body.appendChild(scoreBar);
  } else {
    scoreBar.querySelector(".score-text").textContent = `${score}/100`;
  }
}

function showUnlockPopup(name) {
  const characterImages = {
    "Seedy Sammy": "character2.png",
    "Martin Mince": "character3.png",
    "Chippie Charlie": "character4.png"
  };

  const imgSrc = characterImages[name] || "default.png";

  const popup = document.createElement("div");
  popup.className = "unlock-popup";
  popup.innerHTML = `
    <div class="unlock-popup-content">
      You unlocked ${name}!<br><br>
      <img src="../assets/${imgSrc}" alt="${name}" style="width:100px; height:auto;"/><br><br>
      <button>Close</button>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector("button").addEventListener("click", () => popup.remove());

  setTimeout(() => {
    if (document.body.contains(popup)) popup.remove();
  }, 5000);
}

function checkUnlocks(score) {
  let unlockedAny = false;

  if (score >= 25 && !unlocked.seedySammy) {
    unlocked.seedySammy = true;
    saveUnlocked();
    showUnlockPopup("Seedy Sammy");
    unlockedAny = true;
  }
  if (score >= 50 && !unlocked.martinMince) {
    unlocked.martinMince = true;
    saveUnlocked();
    showUnlockPopup("Martin Mince");
    unlockedAny = true;
  }
  if (score >= 80 && !unlocked.chippieCharlie) {
    unlocked.chippieCharlie = true;
    saveUnlocked();
    showUnlockPopup("Chippie Charlie");
    unlockedAny = true;
  }

  return unlockedAny;
}

function nextPage(url, points) {
  let score = parseInt(sessionStorage.getItem("score") || "0");
  score += points;
  sessionStorage.setItem("score", score);

  const scoreText = document.querySelector("#score-bar .score-text");
  if (scoreText) scoreText.textContent = `${score}/100`;

  const unlockedAny = checkUnlocks(score);

  if (unlockedAny) {
    setTimeout(() => window.location.href = url, 5000);
  } else {
    window.location.href = url;
  }
}

displayScore();