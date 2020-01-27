import readlineSync from 'readline-sync';


export default function runEngine(greeting, mainAction) {
  const QUESTION_NUMBER = 3;

  console.log('Welcome to the Brain Games!');
  console.log(greeting);

  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  for (let item = 0; item < QUESTION_NUMBER; item += 1) {
    const [strToQuestion, correctAns] = mainAction();

    console.log(`Question: ${strToQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAns) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
}
