import readlineSync from 'readline-sync';

const numberQuestions = 3;

export default function runEngine(greeting, getLogicGame) {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let item = 0; item < numberQuestions; item += 1) {
    const [gameQuestion, correctAnswer] = getLogicGame();

    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
