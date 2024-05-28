function playTheGame() {
    if (!confirm("Do you want to play a guessing game?")) {
      alert("No problem, Goodbye!");
      return;
    }
  
    let userNumber;
    while (true) {
      userNumber = parseInt(prompt("Enter a number between 0 and 10:"));
      if (isNaN(userNumber)) {
        alert("Sorry, not a number. Please try again.");
      } else if (userNumber < 0 || userNumber > 10) {
        alert("Sorry, it's not a good number. Please enter a number between 0 and 10.");
      } else {
        break;
      }
    }
  
    const computerNumber = Math.floor(Math.random() * 11);
    let attempts = 0;
    while (userNumber !== computerNumber && attempts < 3) {
      attempts++;
      if (userNumber > computerNumber) {
        userNumber = parseInt(prompt("Your number is bigger. Guess again:"));
      } else {
        userNumber = parseInt(prompt("Your number is smaller. Guess again:"));
      }
    }
  
    if (userNumber === computerNumber) {
      alert("WINNER!");
    } else {
      alert("Out of chances! The number was: " + computerNumber);
    }
  }