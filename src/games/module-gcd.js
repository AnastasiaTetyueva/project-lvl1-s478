import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const findGcd = () => {
    game(`Find the greatest common divisor of given numbers.`, findGcdGameStep);
}

export const computeGcd = (a, b) => {
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

export const findGcdGameStep = () => {
    let range = 100;
    let number1 = randomNumber(1, range); 
    let number2 = randomNumber(1, range); 
    console.log(`Question: ${number1} ${number2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    if (computeGcd(number1, number2) == answer) {
        console.log(`Correct!`);
        return [true];
    }
    else {
        return [false, answer, computeGcd(number1, number2)];
    }
}