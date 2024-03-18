const todayIs = ["going to be a great", "beautiful and so are you", "a brand new exciting day", "going to rock", "fun and fancy free", "full of life and sound", "a marvel and a wonder"];
const dayTask = ["crush your goals", "accomplish so much", "be exactly where you need to be", "defeat your enemies", "learn so much", "save the world", "make such progress"];
const positiveWords = ["accomplished", "adventurous", "amazing", "beautiful", "wonderful", "charismatic", "creative", "determined", "brilliant", "friendly", "funny", "generous", "king", "helpful", "loyal", "likable", "fabulous", "excellent", "awesome", "gorgeous", "incredible", "outstanding", "remarkable", "spectacular", "super", "wonderous"];

function newMessage() {
    let day = todayIs[Math.floor(Math.random() * todayIs.length)];
    let task = dayTask[Math.floor(Math.random() * dayTask.length)];
    let affirmation = positiveWords[Math.floor(Math.random() * positiveWords.length)];
    return `Hello! Today is ${day}! On this day, you will ${task}. Remember, you are ${affirmation}!`;
}

const generateButton = document.getElementById("generate");
let messageBox = document.getElementById("message");
generateButton.addEventListener("click", function () { messageBox.innerHTML = newMessage() })