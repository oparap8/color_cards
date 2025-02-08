let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");
let color4 = document.getElementById("color-4");
let answer1 = document.querySelector("#answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");
let answer4 = document.getElementById("answer-4");
let turns = document.getElementById("turns");
let guess = document.getElementById("guess");
let result = document.getElementById("result");
function generateColor(){
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    let num = Math.floor(Math.random() * colors.length)
    return colors[num]
}


let turnsCount = 7;
let randomColors = [];

guess.addEventListener("click", () => {
    let elementColors = [color1, color2, color3, color4].map(color => color.style.backgroundColor);
    let answers = [answer1, answer2, answer3, answer4].map(element => element.value);

    if (guess.textContent.trim() === "Start") {
        guess.textContent = "Guess";
        turns.innerText = turnsCount;
        randomColors = [];
        for (let elementColor of elementColors) {
            randomColors.push(generateColor());
        }
        for (let i = 0; i < randomColors.length; i++){
            document.getElementById(`color-${i + 1}`).style.backgroundColor = "white";
        }
        result.textContent = ""
        console.log(randomColors);
    }else if (guess.textContent.trim() === "Restart") {
        guess.textContent = "Guess";
        turnsCount = 7;
        turns.innerText = turnsCount;
        randomColors = [];
        for (let elementColor of elementColors) {
            randomColors.push(generateColor());
        }
        for (let i = 0; i < randomColors.length; i++){
            document.getElementById(`color-${i + 1}`).style.backgroundColor = 'white';
        }
        result.textContent = ""
        console.log(randomColors);
    }else if (turnsCount === 0){
        result.textContent = "Out of turns :("
        guess.textContent = "Restart";
    } else {
        turnsCount -= 1;
        turns.innerText = turnsCount;
        // let's count the number of correct colors and positions
        // first, let's count the number of correct colors
        let numCorrectColors = 0;
        for (let i = 0; i < answers.length; i++){
            // if the answer is in the array of random colors
            // and the answer is in the correct position in the array
            if (randomColors.includes(answers[i]) && answers.indexOf(answers[i]) === i){
                // increment the number of correct colors
                numCorrectColors++
            }
        }
        // now, let's count the number of correct positions
        let numCorrectPositions = 0
        for (let i = 0; i < answers.length; i++){
            // if the answer is equal to the random color at the same index
            if(answers[i] === randomColors[i]){
                // increment the number of correct positions
                numCorrectPositions++
            }
        }

        if (numCorrectPositions === 4){
            guess.textContent = "Restart";
            result.textContent = "You win!"
            for (let i = 0; i < randomColors.length; i++){
                document.getElementById(`color-${i + 1}`).style.backgroundColor = randomColors[i];
            }
        }else {
            result.textContent = `You have ${numCorrectColors} correct ${numCorrectColors === 1 ? "color" : "colors"} and ${numCorrectPositions} correct ${numCorrectPositions === 1 ? "position" : "positions"}`
        }

        console.log(randomColors, answers, numCorrectColors, numCorrectPositions);
    }
});




