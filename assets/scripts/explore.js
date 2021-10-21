// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var options = document.getElementById('voice-select');
    var voices = [];
  setTimeout(function wait() {
    voices = speechSynthesis.getVoices();
    console.log(voices);
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('value', i);
      //option.setAttribute('data-lang', voices[i].lang);
      //option.setAttribute('data-name', voices[i].name);
      options.appendChild(option);
      console.log('2');
    }
  }, 500);
  console.log('2.5');
  var button = document.querySelector('button');
  button.addEventListener('click', playSound);
  console.log('3');
  function playSound() {
    var selectedVoice = options.value;
    var thingToSay = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
    thingToSay.voice = voices[selectedVoice];
    var image = document.querySelector('[alt="Smiling face"]');
    image.src = "assets/images/smiling-open.png";
    synth.speak(thingToSay);
    thingToSay.onend = function(event) {
      image.src = "assets/images/smiling.png";
    }
    console.log('4');
  }
}