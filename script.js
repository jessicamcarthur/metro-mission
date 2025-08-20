document.addEventListener("DOMContentLoaded", () => {

  const playBtn = document.getElementById("play-btn");
  const howtoBtn = document.getElementById("howto-btn");

  if (playBtn) playBtn.addEventListener("click", () => {
    window.location.href = "character1.html"; // start character select
  });

  if (howtoBtn) howtoBtn.addEventListener("click", () => {
    window.location.href = "howto.html";
  });


  const prevCharacter = document.getElementById("prev-character");
  const nextCharacter = document.getElementById("next-character");
  const selectBtn = document.getElementById("select-btn");

  if (prevCharacter) {
    prevCharacter.addEventListener("click", () => {
      if (window.location.href.includes("character2.html")) window.location.href = "character1.html";
      else if (window.location.href.includes("character3.html")) window.location.href = "character2.html";
      else if (window.location.href.includes("character4.html")) window.location.href = "character3.html";
      else window.location.href = "character4.html";
    });
  }

  if (nextCharacter) {
    nextCharacter.addEventListener("click", () => {
      if (window.location.href.includes("character1.html")) window.location.href = "character2.html";
      else if (window.location.href.includes("character2.html")) window.location.href = "character3.html";
      else if (window.location.href.includes("character3.html")) window.location.href = "character4.html";
      else window.location.href = "character1.html";
    });
  }

  if (selectBtn) {
    selectBtn.addEventListener("click", () => {
      window.location.href = "levels.html";
    });
  }

  const trainBtn = document.getElementById("train-btn");
  const busBtn = document.getElementById("bus-btn");
  const ferryBtn = document.getElementById("ferry-btn");

  if (trainBtn) trainBtn.addEventListener("click", () => {
    window.location.href = "trainstation.html";
  });
  if (busBtn) busBtn.addEventListener("click", () => {
    window.location.href = "bus.html";
  });
  if (ferryBtn) ferryBtn.addEventListener("click", () => {
    window.location.href = "ferry.html";
  });

  const task1 = document.getElementById("task1");
  const task2 = document.getElementById("task2");
  const task3 = document.getElementById("task3");
  const task4 = document.getElementById("task4");

  if (task1) task1.addEventListener("click", () => {
    window.location.href = "scenario1.html";
  });
  if (task2) task2.addEventListener("click", () => {
    window.location.href = "traininterior.html";
  });
  if (task3) task3.addEventListener("click", () => {
    window.location.href = "scenario3.html";
  });
  if (task4) task4.addEventListener("click", () => {
    window.location.href = "scenario4.html";
  });

  const instructionPopup = document.getElementById("instruction-popup");
  const instructionText = document.getElementById("instruction-text");
  const nextInstruction = document.getElementById("next-instruction");

  if (instructionPopup) {
    let step = 0;
    instructionPopup.classList.remove("hidden");
    nextInstruction.addEventListener("click", () => {
      step++;
      if (step === 1) {
        instructionText.textContent = "Scroll to move through the train station and find tasks";
      } else {
        instructionPopup.classList.add("hidden");
      }
    });
  }

  const interiorTask1 = document.getElementById("interior-task1");
  const interiorTask2 = document.getElementById("interior-task2");

  if (interiorTask1) interiorTask1.addEventListener("click", () => {
    window.location.href = "scenario5.html";
  });
  if (interiorTask2) interiorTask2.addEventListener("click", () => {
    window.location.href = "scenario6.html";
  });

  const choiceA = document.getElementById("choiceA");
  const choiceB = document.getElementById("choiceB");
  const choiceC = document.getElementById("choiceC");

  if (choiceA) choiceA.addEventListener("click", () => {
    alert("You chose A! (Add outcome here)");
  });
  if (choiceB) choiceB.addEventListener("click", () => {
    alert("You chose B! (Add outcome here)");
  });
  if (choiceC) choiceC.addEventListener("click", () => {
    alert("You chose C! (Add outcome here)");
  });
});