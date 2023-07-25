// Kelime listesi
const words = ["balon", "maske", "sepet", "kalem", "meyve", "çanta","bacak","badem","dağcı","dakik","çakıl","haciz","haber","iblis","kabız","kabus","jeton","ladin","macun","jilet"];

// Rastgele kelime seçimi
let selectedWord = "";
let guessedWord = "";
let attempts = 0;
let control = document.querySelector("#guess")

function startGame() {
  // Rastgele kelime seç
  const randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex].toUpperCase();
  attempts = 0;

  // Oyun alanını oluştur
  const wordleContainer = document.querySelector("#wordle-container");
  wordleContainer.innerHTML = "";

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      const letterBox = document.createElement("div");
      letterBox.classList.add("letter-box");
      if (row !== 0) {
        letterBox.textContent = "-";
      }
      wordleContainer.appendChild(letterBox);
    }
  }

  guessedWord = "";
  document.querySelector("#guess").value = "";
  document.querySelector("#result").style.visibility = "hidden";
}

function checkGuess() {
  guessedWord = document.getElementById("guess").value.trim().toUpperCase();
  if (guessedWord.length === 5) {
    attempts++;
    if (attempts >= 6) {
      document.querySelector("#result").textContent = "Üzgünüm, kelimeyi bulamadınız. Kaybettiniz.";
      document.querySelector("#result").style.visibility = "visible";
      return;
    }

    const letterBoxes = document.getElementsByClassName("letter-box");

    for (let i = 0; i < 5; i++) {
      letterBoxes[i + (attempts - 1) * 5].textContent = guessedWord[i];
      letterBoxes[i + (attempts - 1) * 5].classList.remove("correct", "wrong-position");

      if (guessedWord[i] === selectedWord[i]) {
        letterBoxes[i + (attempts - 1) * 5].classList.add("correct");
      } else if (selectedWord.includes(guessedWord[i])) {
        letterBoxes[i + (attempts - 1) * 5].classList.add("wrong-position");
      }
    }

    if (guessedWord === selectedWord) {
      document.querySelector("#result").style.visibility = "visible";
      document.querySelector("#result").style.transform = "translate(-50%, -50%) scale(1)";
      document.querySelector("#result").style.transition = "visibility 0s linear, transform 0.5s ease";
    }
control = ""
  }
}

// Oyunu başlat
startGame();
