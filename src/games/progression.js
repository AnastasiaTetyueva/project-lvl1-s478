import executeGame from '..';
import randomNumber from '../utils';

const gameRules = 'What number is missing in the progression?';

const performProgression = (showQuestion, expectUserInput) => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 10);
  const skipIndex = randomNumber(0, 9);
  const skipValue = start + step * skipIndex;
  const progressionLength = 10;
  let progressionString = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === skipIndex) {
      progressionString = `${progressionString}.. `;
    } else {
      progressionString = `${progressionString + (start + step * i)} `;
    }
  }
  showQuestion(progressionString);
  const answer = parseInt(expectUserInput(), 10);
  if (skipValue === answer) {
    return [true];
  }
  return [false, answer, skipValue];
};

export default () => {
  executeGame(gameRules, performProgression);
};
