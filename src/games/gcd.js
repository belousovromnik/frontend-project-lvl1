import {
  getRandomInt,
  euclideanAlgorithm,
} from '../engine';


export function greeting() {
  return 'Find the greatest common divisor of given numbers.';
}

export const mainAction = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();

  const minNum = firstNum < secondNum ? firstNum : secondNum;
  const maxNum = minNum === firstNum ? secondNum : firstNum;
  const correctAns = String(euclideanAlgorithm(minNum, maxNum));

  const strToQuestion = `${firstNum} ${secondNum}`;

  return [strToQuestion, correctAns];
};
