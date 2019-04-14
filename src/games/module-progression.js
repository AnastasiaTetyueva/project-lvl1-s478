import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const guessProgressionGameStep = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 10);
  const skipIndex = randomNumber(0, 9);
  const skipValue = start + step * skipIndex;
  let progressionString = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === skipIndex) {
      progressionString = `${progressionString}.. `;
    } else {
      progressionString = `${progressionString + (start + step * i)} `;
    }
  }
  console.log(`Question: ${progressionString}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  if (skipValue === answer) {
    console.log('Correct!');
    return [true];
  }

  return [false, answer, skipValue];
};

export const guessProgression = () => {
  game('What number is missing in the progression?', guessProgressionGameStep);
};
