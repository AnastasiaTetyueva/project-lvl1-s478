import readlineSync from 'readline-sync';

const numberOfTries = 3;

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const expectUserInput = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (task, gameStep) => {
  console.log('Welcome to the Brain Games!');
  if (task) console.log(task);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (!gameStep) return;
  for (let i = 0; i < numberOfTries; i += 1) {
    const result = gameStep(showQuestion, expectUserInput);
    const success = result[0];
    if (!success) {
      const answer = result[1];
      const correct = result[2];
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`);
      console.log(`Let is try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
