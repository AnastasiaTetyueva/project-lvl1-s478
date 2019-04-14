import executeGame from '..';
import randomNumber from '../utils';

const gameRules = 'Find the greatest common divisor of given numbers.';
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

export const findGcdStep = (showQuestion, expectUserInput) => {
  const range = 100;
  const number1 = randomNumber(1, range);
  const number2 = randomNumber(1, range);
  showQuestion(`${number1} ${number2}`);
  const answer = parseInt(expectUserInput(), 10);
  if (computeGcd(number1, number2) === answer) {
    return [true];
  }
  return [false, answer, computeGcd(number1, number2)];
};

export default () => {
  executeGame(gameRules, findGcdStep);
};
