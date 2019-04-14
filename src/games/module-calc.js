import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const calc = () => {
    game(`What is the result of the expression?`, calcGameStep);
}

export const calcGameStep = () => {
    const operators = ['+', '-', '*'];
    const range = 100;
    let number1 = randomNumber(1, range); 
    let number2 = randomNumber(1, range); 
    let operation = randomNumber(0, operators.length);
    let sign = operators[operation]
    console.log(`Question: ${number1} ${sign} ${number2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    let decision = 0;
    switch (sign) {
        case '+':
        decision = number1 + number2;
        break;
        case '-':
        decision = number1 - number2;
        break;
        case '*':
        decision = number1 * number2;
        break;
    }
    if (decision == answer) {
        console.log(`Correct!`);
        return [true];
    }
    else {
        return [false, answer, decision];
    }
}