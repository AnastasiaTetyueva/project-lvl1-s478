import executeGame from '..';
import randomNumber from '../utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const evenStep = (showQuestion, expectUserInput) => {
  const range = 100;
  const number = randomNumber(1, range);
  showQuestion(number);
  const answer = expectUserInput().toLowerCase();
  if (isEven(number) === (answer === 'yes')) {
    return [true];
  }
  return [false, answer, isEven(number) ? 'yes' : 'no'];
};

export default () => {
  executeGame(gameRules, evenStep);
};
