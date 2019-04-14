import readlineSync from 'readline-sync';

export const randomNumber = (start, end) => {
    return Math.floor(start + Math.random() * (end - start));
}

export const game = (task, gameStep) => {
    console.log(`Welcome to the Brain Games!`);
    if (task) console.log(task);
    const name = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${name}!`);
    if (!gameStep) return
    const numberOfTries = 3;
    for (let i = 0; i < numberOfTries; i++) {
        let result = gameStep();
        let success = result[0];
        if (!success) {
            let answer = result[1];
            let correct = result[2];
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}"`);
            console.log(`Let is try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}








