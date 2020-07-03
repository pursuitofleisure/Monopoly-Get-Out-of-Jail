const dice = document.querySelector("#roll-die");
const reset = document.querySelector("#reset");
const dice01 = document.querySelector("#dice01");
const dice02 = document.querySelector("#dice02");
const remaining = document.querySelector("#remaining");
const cellWrapper = document.querySelector("#cell-wrapper");
const jail = document.querySelector("#jail");

let triesRemaining = 3;

/* This function returns a random number between 1 and 6 */
function diceRoll() {
   return Math.floor(Math.random() * (6 - 1) + 1) + 1;
 }
 
/* Roll the dice when the button is clicked.
If the numbers match within 3 tries, you are out of jail */
dice.addEventListener("click", () => {
  if (triesRemaining >= 1) {
    let roll01 = diceRoll();
    let roll02 = diceRoll();
    dice01.innerHTML = roll01;
    dice02.innerHTML = roll02;
    
    triesRemaining -= 1;
    remaining.innerHTML = triesRemaining;

    /* If dice match, exit with success */
    if (roll01 === roll02) {
      dice.classList = "disabled";
      reset.classList = "enabled";
      jail.classList = "free";
      cellWrapper.classList = "freed";
      exit;
    } else {
      
      /* If 3 attempts have been made, game over */
      if (triesRemaining == 0) {
        dice.classList = "disabled";
        reset.classList = "enabled";
        cellWrapper.classList = "jailed";
        jail.classList = "sorry";
      }
    }
  } // end tries > 1
});

/* Reset to the beginning */
reset.addEventListener("click", () => {
  triesRemaining = 3;
  remaining.innerHTML = triesRemaining;
  dice01.innerHTML = "*";
  dice02.innerHTML = "*";
  dice.classList = "";
  reset.classList = "";
  cellWrapper.classList = "";
  jail.classList = "";
});
