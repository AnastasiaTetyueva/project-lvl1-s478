import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const isEven = (number) => {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

export const evenGameStep = () => {
    let range = 100;
    let number = randomNumber(1, range);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question(`Your answer: `).toLowerCase();
    if (isEven(number) == (answer == 'yes')) {
        console.log(`Correct!`);
        return [true];
    }
    else {
        return [false, answer, isEven(number) ? "yes" : "no"];
    }
}

export const checkEven = () => {
    game(`Answer "yes" if number even otherwise answer "no".`, evenGameStep);
}