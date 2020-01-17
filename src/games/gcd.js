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

  const correctAns = String(euclideanAlgorithm(firstNum, secondNum));

  const strToQuestion = `${firstNum} ${secondNum}`;

  return [strToQuestion, correctAns];
};
