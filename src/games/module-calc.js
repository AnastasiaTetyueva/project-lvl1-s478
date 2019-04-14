import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const calcGameStep = () => {
  const operators = ['+', '-', '*'];
  const range = 100;
  const number1 = randomNumber(1, range);
  const number2 = randomNumber(1, range);
  const operation = randomNumber(0, operators.length);
  const sign = operators[operation];
  console.log(`Question: ${number1} ${sign} ${number2}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
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
    default:
      break;
  }
  if (decision === answer) {
    console.log('Correct!');
    return [true];
  }

  return [false, answer, decision];
};

export const calc = () => {
  game('What is the result of the expression?', calcGameStep);
};
