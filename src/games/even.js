import { getRandomInt } from '../engine';

export function greeting() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export const mainAction = () => {
  const cnt = getRandomInt();

  let correctAns = 'no';
  if (cnt % 2 === 0) {
    correctAns = 'yes';
  }

  const strToQuestion = String(cnt);

  return [strToQuestion, correctAns];
};
