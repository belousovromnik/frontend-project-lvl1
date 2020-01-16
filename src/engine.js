import readlineSync from 'readline-sync';

export const getRandomInt = () => {
  const MINIMAL_RANDOM = 1;
  const MAXIMAL_RANDOM = 100;

  return Math.floor((Math.random() * MAXIMAL_RANDOM) + MINIMAL_RANDOM);
};

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;

export default function run(greeting, mainAction) {
  const QUESTION_NUMBER = 3;

  console.log('Welcome to the Brain Games!');
  console.log(greeting());

  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  let isCongratulations = true;
  for (let item = 0; item < QUESTION_NUMBER; item += 1) {
    const [strToQuestion, correctAns] = mainAction();

    console.log(`Question: ${strToQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAns) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'`);
      console.log(`Let's try again, ${nameUser}!`);
      isCongratulations = false;
      break;
    }
    console.log('Correct!');
  }
  if (isCongratulations) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}
