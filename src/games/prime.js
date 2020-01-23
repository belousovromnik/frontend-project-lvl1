import run from '../engine';
import randomCount from '../sec_functions';

const isPrime = (number) => {
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

export const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const logicGame = () => {
  const question = randomCount();
  const strToQuestion = String(question);

  const correctAns = isPrime(question) ? 'yes' : 'no';

  return [strToQuestion, correctAns];
};

export const mainAction = () => {
  run(GREETING, logicGame);
};
