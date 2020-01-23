import run from '../engine';
import randomCount from '../sec_functions';

const euclideanAlgorithm = (a, b) => {
  // остаток от деления
  const remainderOfDivision = a % b;
  if (remainderOfDivision === 0) {
    return b;
  }
  return euclideanAlgorithm(b, remainderOfDivision);
};

export const GREETING = 'Find the greatest common divisor of given numbers.';

export const logicGame = () => {
  const firstNum = randomCount();
  const secondNum = randomCount();

  const correctAns = String(euclideanAlgorithm(firstNum, secondNum));

  const strToQuestion = `${firstNum} ${secondNum}`;

  return [strToQuestion, correctAns];
};

export const mainAction = () => {
  run(GREETING, logicGame);
};
