//playing sound
function playSound(pressedKey) {
  const audio = document.querySelector(
    `audio[data-key="${pressedKey.keyCode}"]`
  );
  const key = document.querySelector(`div[data-key="${pressedKey.keyCode}"]`);
  //checking for key audio
  if (!audio) return;
  // we add playing class to pressed key
  key.classList.add("playing");
  // for every press resetting audio to begining.
  audio.currentTime = 0;
  audio.play();
}

// After transition we delete playing class
function removeTransition(pressedKey) {
  if (pressedKey.propertyName !== "transform") return;
  pressedKey.target.classList.remove("playing");
}

//Getting all key div's to keys array
const keys = document.querySelectorAll(".key");
//For every keys looking transition
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// We are looking which key pressed(with keycode attribute) and playing audio.
window.addEventListener("keydown", playSound);

//Getting Keycode
//window.addEventListener("keydown", (e)=> {console.log(e.keyCode)});

// we can select one element with attribute using []
//const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
