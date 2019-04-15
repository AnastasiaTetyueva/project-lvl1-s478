import executeGame from '..';
import randomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let x = 2; x <= n / 2; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

const rangeNumber = 100;

const generatePrimeTask = () => {
  const question = randomNumber(1, rangeNumber);
  return [question, isPrime(question) ? 'yes' : 'no'];
};

export default () => {
  executeGame(description, generatePrimeTask);
};
