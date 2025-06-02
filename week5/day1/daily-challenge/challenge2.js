const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(morse) {
  return new Promise((resolve, reject) => {
    const morseObject = JSON.parse(morse);
    if (Object.keys(morseObject).length === 0) {
      reject("empty object");
    } else resolve(morseObject);
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const sentence = prompt("please enter your word to translate it to morse : ");
    const sentenceArray = [...sentence.toLowerCase()]; // تحويل الحروف للصغيرة

    for (let char of sentenceArray) {
      if (char !== " " && !morseJS[char]) {
        reject(`Error: Character "${char}" does not exist in Morse code.`);``
      }
    }
    const morseTranslation = sentenceArray
      .filter((char) => char !== " ")
      .map((char) => morseJS[char]);

    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const content = morseTranslation.join('\n');

  const pre = document.createElement('pre');
  pre.textContent = content;

  document.body.appendChild(pre);
}

toJs(morse)
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.error(error));
