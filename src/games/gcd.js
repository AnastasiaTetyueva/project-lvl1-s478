import executeGame from '..';
import randomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const computeGcd = (first, second) => {
  let a = Math.abs(first);
  let b = Math.abs(second);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

const rangeNumber = 100;

export const generateGcdTask = () => {
  const question1 = randomNumber(1, rangeNumber);
  const question2 = randomNumber(1, rangeNumber);
  const fullQuestion = `${question1} ${question2}`;
  const fullAnswer = computeGcd(question1, question2);
  return [fullQuestion, fullAnswer.toString()];
};

export default () => {
  executeGame(description, generateGcdTask);
};
