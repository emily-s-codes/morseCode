let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "/" },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

let input = [];
let inputEl = document.getElementById("textInput");
let output = document.getElementById("secretMessage");
let decoder = document.getElementById("decoderMessage");


function encodeMe(event) {
    event.preventDefault();
    input = Array.from(inputEl.value);

    input.forEach((letter) => {
        console.log(letter)
        for (let i = 0; i < morseAlphabet.length; i++) {
            if (letter.toUpperCase() === morseAlphabet[i].letter) {
                output.innerHTML += (morseAlphabet[i].morseCode + " ");
                decoder.innerHTML += `${letter.toUpperCase()} = ${morseAlphabet[i].morseCode}<br>`;
            }
        }

    })


    // for (i = 0; i < input.length; i++) {
    //     if (input[i] === morseAlphabet[].letter) {
    //         console.log("treffer")
    //     }
    // }
}
// return input.toUpperCase().split("").map(j => {
//     return morseAlphabet[j] ? morseAlphabet[j] : j;
// }).join("");