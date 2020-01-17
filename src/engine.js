import readlineSync from 'readline-sync';

export const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number < 2 || number % 2 === 0) {
    return false;
  }
  const sqrtNumber = Math.floor(Math.sqrt(number));
  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const getRandomInt = (minRandom = 1, maxRandom = 100) => {
  // 0-1 случайное число, затем получаем например 0-99, и прибавляем минимум
  const retValue = Math.floor((Math.random() * maxRandom) + minRandom);
  return retValue;
};

export const euclideanAlgorithm = (a, b) => {
  // остаток от деления
  const remainderOfDivision = a % b;
  if (remainderOfDivision === 0) {
    return b;
  }
  return euclideanAlgorithm(b, remainderOfDivision);
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
