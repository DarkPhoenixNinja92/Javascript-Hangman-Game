const keyboard = document.getElementById("qwerty");
let phraseSection = document.querySelector("#phrase > ul");
let phrases = ["When the Rubber Hits the Road", "You Can't Teach an Old Dog New Tricks", "Drawing a Blank", "Jumping the Gun", "Birds of a Feather Flock Together", "Not the Sharpest Tool in the Shed", "Jack of All Trades Master of None", "Give a Man a Fish", "Mountain Out of a Molehill", "Wouldn't Harm a Fly"];

function getRandomPhrase() {
    let valueRand = Math.floor(Math.random() * phrases.length);
    let phrase = phrases[valueRand];
    return phrase;
}

function splitPhrase() {
    const phraseChar = getRandomPhrase().split('');
    return phraseChar;

}
const strSplit = splitPhrase();

function printArr() {
    for (let i = 0; i < strSplit.length; i++) {
        let newLi = document.createElement("li");
        let newLiContent = document.createTextNode(strSplit[i]);
        if (strSplit[i] === ' ') {
            newLi.classList.add("space");
        }
        newLi.classList.add("letter");
        newLi.appendChild(newLiContent);
        phraseSection.appendChild(newLi);
    }
}
printArr();