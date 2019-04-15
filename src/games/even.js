import executeGame from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const rangeNumber = 100;

const generateEvenTask = () => {
  const question = randomNumber(1, rangeNumber);
  return [question, isEven(question) ? 'yes' : 'no'];
};

export default () => {
  executeGame(description, generateEvenTask);
};
