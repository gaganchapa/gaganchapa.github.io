const recognition = new webkitSpeechRecognition();
const synth = window.speechSynthesis;
recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 60;
recognition.lang = 'en-US';
let speaking = false;
let cod = [1]; // Store the recognized commands in an array
// Add an onend event that restarts the recognition process
let commands = [...new Set(cod)];
recognition.onend = () => {
    recognition.start();
    // console.log("mine")
};
recognition.onresult = function(event) {
    const result = event.results[event.results.length - 1][0].transcript;
    commands.push(result.toLowerCase()); // Add the recognized command to the array
    console.log(commands); // Log the commands array for debugging purposes
    
    if (commands.length>0){
        // Process the commands array to perform actions
        if (result.includes("lunch")) {
            const lunchFilter = document.querySelector('.filter[data-filter=".lunch"]');
            lunchFilter.click();
        }
        if (result.includes("breakfast")) {
            const breakfastFilter = document.querySelector('.filter[data-filter=".breakfast"]');
            breakfastFilter.click();
        } 
        if (result.includes("snacks")) {
            const snacksFilter = document.querySelector('.filter[data-filter=".Snacks"]');
            snacksFilter.click();
        } 
        if (result.includes("dinner")) {
            const dinnerFilter = document.querySelector('.filter[data-filter=".dinner"]');
            dinnerFilter.click();
        }  
        if (result.includes("speak") && !speaking) {
            speaking = true;
            document.getElementById("hello").click();
            speak();
        }
        if (result.includes("click")){
            const clickme = document.getElementById("hi")
            clickme.click();
        }
        if (result.includes("hello")){
            const clickme = document.getElementById("sena")
            clickme.click();
        }
    }
};
function speak() {
    // // Get the text to speak
    
    // // Create a new SpeechSynthesisUtterance object
    // let utterance = new SpeechSynthesisUtterance();
    // let voices = window.speechSynthesis.getVoices();
    // utterance.voice =voices[1];
    // utterance.text = "Hey kid, you have four options to choose from: Food, Music, Cartoon Study, and you can speak the desired text.";

    // window.speechSynthesis.speak(utterance);
    const speakBtn = document.getElementById('speakBtn');
    // const text = textInput.value;
    responsiveVoice.speak(text, "UK English Male", {rate: 0.8});
    speakBtn.addEventListener('click', function() {
        // const text = textInput.value;
        responsiveVoice.speak(text, "UK English Male", {rate: 0.8});
    });
  }
document.addEventListener("DOMContentLoaded",function(){
    recognition.start();
    // document.getElementById("hello").click();
    speak();
});

responsiveVoice.speak(text, "UK English Male", {rate: 0.8});
speakBtn.addEventListener('click', function() {
    // const text = textInput.value;
    responsiveVoice.speak(text, "UK English Male", {rate: 0.8});
});

window.onload = function() {
    // your function code goes here
    speak();
  };