import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

const computeGcd = (first, second) => {
  let a = Math.abs(first);
  let b = Math.abs(second);
  if (b > a) {
    const temp = a; a = b; b = temp;
  }
  for (;;) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};

export const findGcdGameStep = () => {
  const range = 100;
  const number1 = randomNumber(1, range);
  const number2 = randomNumber(1, range);
  console.log(`Question: ${number1} ${number2}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  if (computeGcd(number1, number2) === answer) {
    console.log('Correct!');
    return [true];
  }

  return [false, answer, computeGcd(number1, number2)];
};

export const findGcd = () => {
  game('Find the greatest common divisor of given numbers.', findGcdGameStep);
};
