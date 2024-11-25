const speech = new SpeechSynthesisUtterance();
const text = document.querySelector('textarea');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')
const voiceSelect = document.querySelector('select');

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
})

playBtn.addEventListener('click', () => {
  let error = document.querySelector('span');
  if(text.value == '') {
    error.classList.remove('hide');
  }else {
    error.classList.add('hide');

    if(window.speechSynthesis.speaking == true) {
      window.speechSynthesis.resume(speech);
    }else {
      speech.text = text.value;
      window.speechSynthesis.speak(speech);
    }
  }
});

pauseBtn.addEventListener('click', () => {
  if(window.speechSynthesis.speaking == true) {
    window.speechSynthesis.pause(speech);
  }else {
    window.speechSynthesis.resume(speech);
  }
});

resetBtn.addEventListener('click', () => {
  window.speechSynthesis.cancel(speech);
  text.value = '';
})

text.addEventListener('input', () => {
  window.speechSynthesis.cancel(speech);
})