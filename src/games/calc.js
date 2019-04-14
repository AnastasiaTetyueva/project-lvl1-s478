import executeGame from '..';
import randomNumber from '../utils';

const gameRules = 'What is the result of the expression?';

const calcStep = (showQuestion, expectUserInput) => {
  const operators = ['+', '-', '*'];
  const range = 100;
  const number1 = randomNumber(1, range);
  const number2 = randomNumber(1, range);
  const operation = randomNumber(0, operators.length);
  const sign = operators[operation];
  showQuestion(`${number1} ${sign} ${number2}`);
  const answer = parseInt(expectUserInput(), 10);
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
    return [true];
  }
  return [false, answer, decision];
};

export default () => {
  executeGame(gameRules, calcStep);
};
