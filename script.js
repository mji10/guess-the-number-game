let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);

  if (!userInput) {
    document.querySelector(".message").textContent =
      "Please enter a valid number!!";
  } else if (userInput > 20) {
    alert("The number is between 1 - 20 only!");
  } else if (secretNumber === userInput) {
    document.querySelector(".number").textContent = userInput;
    document.querySelector(".message").textContent = "You WIN !!";
    document.querySelector("body").style.backgroundColor = "green";

    // Update New high Score
    if (score >= highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (secretNumber !== userInput) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".check").textContent = "Try Again.";
    if (userInput < secretNumber) {
      document.querySelector(".message").textContent = "Too Low";
    } else {
      document.querySelector(".message").textContent = "Too High";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#292928";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").textContent = "Check!";
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
});
