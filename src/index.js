import readlineSync from 'readline-sync';

export const actual = () => {
    console.log(`Welcome to the Brain Games!`);
    console.log(`Answer "yes" if number even otherwise answer "no".`);
    const name = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${name}!`);
    return name;
}

export const checkEven = () => {
    const name = actual();
    for(let i = 0; i < 3; i++) {
        let n = Math.ceil(100 * Math.random());
        console.log(`Question: ${n}`);
        const answer = readlineSync.question(`Your answer: `).toLowerCase();
        const nAnswer = answer == 'yes' ? 0 : 1;
        if(n % 2 == nAnswer) {
            console.log(`Correct!`); 
        }
        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${n % 2 == 0 ? 'yes' : 'no'}"`);
            console.log(`Let is try again, ${name}!`);
            return;
        }

   }
   console.log(`Congratulations, ${name}!`);
}