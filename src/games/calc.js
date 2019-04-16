import executeGame from '..';
import randomNumber from '../utils';

const description = 'What is the result of the expression?';

const rangeNumber = 100;
const operators = ['+', '-', '*'];

const generateCalcTask = () => {
  const question1 = randomNumber(1, rangeNumber);
  const question2 = randomNumber(1, rangeNumber);
  const operation = randomNumber(0, operators.length);
  const sign = operators[operation];
  let decision = 0;
  const fullQuestion = `${question1} ${sign} ${question2}`;
  switch (sign) {
    case '+':
      decision = question1 + question2;
      break;
    case '-':
      decision = question1 - question2;
      break;
    case '*':
      decision = question1 * question2;
      break;
    default:
      break;
  }
  return [fullQuestion, decision.toString()];
};

export default () => {
  executeGame(description, generateCalcTask);
};
