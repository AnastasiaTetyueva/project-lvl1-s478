import executeGame from '..';
import randomNumber from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgressionTask = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 10);
  const skippedIndex = randomNumber(0, progressionLength - 1);
  const decision = start + step * skippedIndex;
  let progression = '';
  let acc = start;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === skippedIndex) {
      progression = `${progression}..`;
    } else {
      progression = `${progression}${acc}`;
    }
    if (i < progressionLength - 1) {
      progression = `${progression} `;
    }
    acc += step;
  }
  return [progression, decision.toString()];
};

export default () => {
  executeGame(description, generateProgressionTask);
};
