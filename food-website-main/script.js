const speakBtn = document.getElementById('speakBtn');
const textInput = document.getElementById('textInput');

speakBtn.addEventListener('click', function() {
  const text = textInput.value;
  responsiveVoice.speak(text, "UK English Male", {rate: 0.8});
});
