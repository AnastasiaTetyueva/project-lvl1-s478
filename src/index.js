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

const game = (gameStep) => {
    const numberOfTries = 3;
    for(let i = 0; i < numberOfTries; i++) {
        if(!gameStep()) {
            console.log(`Let is try again, ${name}!`);
            return;
        }
        console.log(`Congratulations, ${name}!`);
}

const isEven = (number) => {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

const evenGameStap = () => {
    let randomNumber = Math.ceil(100 * Math.random());
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();
    if(isEven(randomNumber) == (answer == 'yes')){
        console.log(`Correct!`);
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(randomNumber) ? "yes" : "no"}"`);
        return;
        }
    }
}

export const checkEven = () => {
    askName(`Answer "yes" if number even otherwise answer "no".`);
    game(evenGameStap);
}

export const calc = () => {
    askName(`What is the result of the expression?`);
    game(calcGameStap);
}

const isCorrectCalculation = ()

const calcGameStap = () => {
    let randomNumber = Math.ceil(100 * Math.random());
    let 
    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question(`Your answer: `);
    if(isEven(randomNumber) == (answer == 'yes')){
        console.log(`Correct!`);
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(randomNumber) ? "yes" : "no"}"`);
        return;
        }
    }
}