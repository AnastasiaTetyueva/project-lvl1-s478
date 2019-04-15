import executeGame from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgressionTask = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 10);
  const skippedIndex = randomNumber(0, 9);
  const decision = start + step * skippedIndex;
  let progressionText = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === skippedIndex) {
      progressionText = `${progressionText}.. `;
    } else {
      progressionText = `${progressionText + (start + step * i)} `;
    }
  }
  return [progressionText, decision.toString()];
};

export default () => {
  executeGame(description, generateProgressionTask);
};
