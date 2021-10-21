// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Set Image
  var imageSelect = document.getElementById('horn-select');
  var image = document.querySelector('[alt="No image selected"]');
  imageSelect.addEventListener('change', updatePicture);
  function updatePicture(e) {
    if (e.target.value == 'air-horn') {
      image.src = "assets/images/air-horn.svg";
      document.getElementsByClassName('hidden').src = "assets/audio/air-horn.mp3";
    } else if (e.target.value == 'car-horn') {
      image.src = "assets/images/car-horn.svg";
      document.getElementsByClassName('hidden').src = "assets/audio/car-horn.mp3";
    } else if (e.target.value == 'party-horn') {
      image.src = "assets/images/party-horn.svg";
      document.getElementsByClassName('hidden').src = "assets/audio/party-horn.mp3";
    }
  }
  //Set Volume
  var soundSelect = document.getElementById('volume');
  var soundImage = document.querySelector('[alt="Volume level 2"]');
  soundSelect.addEventListener('input', updateSoundDisplay);
  function updateSoundDisplay(sound) {
    document.getElementsByClassName('hidden').volume = sound.target.value / 100;
    if (sound.target.value == 0) {
      soundImage.src = "assets/icons/volume-level-0.svg";
    } else if (sound.target.value < 33) {
      soundImage.src = "assets/icons/volume-level-1.svg";
    } else if (sound.target.value < 67) {
      soundImage.src = "assets/icons/volume-level-2.svg";
    } else {
      soundImage.src = "assets/icons/volume-level-3.svg";
    }
  }
  //Set Button
  var button = document.querySelector('button');
  button.addEventListener('click', playSound);
  const jsConfetti = new JSConfetti();
  function playSound() {
    if (document.getElementsByClassName('hidden').src == "assets/audio/party-horn.mp3") {
      jsConfetti.addConfetti({
        confettiRadius: 75,
      })
    }
    var audioFile = new Audio(document.getElementsByClassName('hidden').src);
    audioFile.volume = document.getElementsByClassName('hidden').volume;
    audioFile.play();
  }
}