import readlineSync from 'readline-sync';
import { game, randomNumber } from '..';

export const guessProgression = () => {
    game(`What number is missing in the progression?`, guessProgressionGameStep);
}

export const guessProgressionGameStep = () => {
    let start = randomNumber(1, 100);
    let step = randomNumber(1, 10);
    let skipIndex = randomNumber(0, 9);
    let skipValue = start + step * skipIndex;
    let progressionString = '';
    for (let i = 0; i < 10; i++) {
        if (i == skipIndex) {
            progressionString = progressionString + '.. ';
        }
        else {
            progressionString = progressionString + (start + step * i) + ' ';
        }
    }
    console.log(`Question: ${progressionString}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    if (skipValue == answer) {
        console.log(`Correct!`);
        return [true];
    }
    else {
        return [false, answer, skipValue];
    }
}
