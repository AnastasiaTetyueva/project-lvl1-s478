import executeGame from '..';
import randomNumber from '../utils';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

const primeStep = (showQuestion, expectUserInput) => {
  const range = 100;
  const number = randomNumber(1, range);
  showQuestion(number);
  const answer = parseInt(expectUserInput(), 10);
  if (isPrime(number) === (answer === 'yes')) {
    return [true];
  }
  return [false, answer, isPrime(number) ? 'yes' : 'no'];
};

export default () => {
  executeGame(gameRules, primeStep);
};
