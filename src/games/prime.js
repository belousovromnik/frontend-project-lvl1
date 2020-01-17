import {
  getRandomInt,
  isPrime,
} from '../engine';


export function greeting() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

export const mainAction = () => {
  const cnt = getRandomInt();
  const strToQuestion = String(cnt);

  let correctAns = 'no';
  if (isPrime(cnt)) {
    correctAns = 'yes';
  }

  return [strToQuestion, correctAns];
};
