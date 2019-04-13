import readlineSync from 'readline-sync';

export const askName = () => {
    const name = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${name}!`);
    return name;
}

const randomNumberCeil = (n) => {
    return Math.ceil(n * Math.random());
}
const randomNumberFloor = (n) => {
    return Math.floor(n * Math.random());
}

const game = (task, gameStep) => {
    console.log(`Welcome to the Brain Games!`);
    console.log(task);
    let name = askName();
    const numberOfTries = 3;
    for (let i = 0; i < numberOfTries; i++) {
        if (!gameStep()) {
            console.log(`Let is try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

const isEven = (number) => {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const evenGameStep = () => {
    let range = 100;
    let number = randomNumberCeil(range);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();
    if (isEven(number) == (answer == 'yes')){
        console.log(`Correct!`);
        return true;
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(number) ? "yes" : "no"}"`);
        return false;
    }
}

export const checkEven = () => {
    game(`Answer "yes" if number even otherwise answer "no".`, evenGameStep);
}

export const calc = () => {
    game(`What is the result of the expression?`, calcGameStep);
}

const calcGameStep = () => {
    const operators = ["+","-","*"];
    const range = 100;
    let number1 = randomNumberCeil(range); 
    let number2 = randomNumberCeil(range); 
    let operation = randomNumberFloor(operators.length);
    console.log(`Question: ${number1} ${operators[operation]} ${number2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    let decision = 0;
    switch (operation) {
        case 0:
        decision = number1 + number2;
        break;
        case 1:
        decision = number1 - number2;
        break;
        case 2:
        decision = number1 * number2;
        break;
    }
    if (decision == answer) {
        console.log(`Correct!`);
        return true;
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was ${decision}`);
        return false;
    }
}

export const findGcd = () => {
    game(`Find the greatest common divisor of given numbers.`, findGcdGameStep);
}

const gcd = (a,b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        let temp = a; a = b; b = temp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

const findGcdGameStep = () => {
    let range = 100;
    let number1 = randomNumberCeil(range); 
    let number2 = randomNumberCeil(range); 
    console.log(`Question: ${number1} ${number2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    if (gcd(number1, number2) == answer){
        console.log(`Correct!`);
        return true;
    }
    else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was ${gcd(number1, number2)}`);
        return false;
    }
}

