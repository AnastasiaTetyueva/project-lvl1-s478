import readlineSync from 'readline-sync';

export const askName = (task) => {
    console.log(`Welcome to the Brain Games!`);
    if (task) {
        console.log(task);
    }
    const name = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${name}!`);
    return name;
}

const game = (name, gameStep) => {
    const numberOfTries = 3;
    for(let i = 0; i < numberOfTries; i++) {
        if(!gameStep()) {
            console.log(`Let is try again, ${name}!`);
            return;
        }
        console.log(`Congratulations, ${name}!`);
    }
}

const isEven = (number) => {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

const evenGameStep = () => {
    let randomNumber = Math.ceil(100 * Math.random());
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();
    if(isEven(randomNumber) == (answer == 'yes')){
        console.log(`Correct!`);
        return true;
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(randomNumber) ? "yes" : "no"}"`);
        return false;
        }
}

export const checkEven = () => {
    let name = askName(`Answer "yes" if number even otherwise answer "no".`);
    game(name, evenGameStep);
}

export const calc = () => {
    let name = askName(`What is the result of the expression?`);
    game(name, calcGameStep);
}

const calcGameStep = () => {
    let number1 = Math.ceil(100 * Math.random());
    let number2 = Math.ceil(100 * Math.random());
    let operation = Math.floor(3 * Math.random());
    console.log(`Question: ${number1} ${["+","-","*"][operation]} ${number2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    let decision = 0;
    if(operation == 0) {
        decision = number1 + number2;
    }
    if(operation == 1) {
        decision = number1 - number2;
    }
    if(operation == 2) {
        decision = number1 * number2;
    }
    if(decision == answer){
        console.log(`Correct!`);
        return true;
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was ${decision}`);
        return false;
        }
}