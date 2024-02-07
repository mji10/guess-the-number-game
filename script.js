let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

 // Creating a function for reusability
 function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);
  if (!userInput) {
    displayMessage("Please enter a valid number!!");
  } else if (userInput > 20) {
    alert("The number is between 1 - 20 only!");
  } else if (secretNumber === userInput) {
    document.querySelector(".number").textContent = userInput;
    displayMessage("You WIN !!");
    document.querySelector("body").style.backgroundColor = "green";
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    // Update New high Score
    if (score >= highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (secretNumber !== userInput) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage("Try Again.");
      // if (userInput < secretNumber) {
      //   displayMessage("Too Low");
      // } else {
      //   displayMessage("Too High");
      // }

      displayMessage(userInput < secretNumber ? "Too Low" : "Too High");
    } else {
      displayMessage("Sorry...You Lose!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#292928";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").textContent = "Check!";
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
});
