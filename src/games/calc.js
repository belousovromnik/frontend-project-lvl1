import _ from 'lodash.sample';
import run from '../engine';
import randomCount from '../sec_functions';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const operatorDict = {
  '+': add,
  '-': sub,
  '*': mul,
};

export const GREETING = 'What is the result of the expression?';

export const logicGame = () => {
  const firstNum = randomCount();
  const secondNum = randomCount();
  const indexOperatorDict = _(Object.keys(operatorDict));

  const correctAns = String(operatorDict[indexOperatorDict](firstNum, secondNum));

  const strToQuestion = `${firstNum} ${indexOperatorDict} ${secondNum}`;

  return [strToQuestion, correctAns];
};

export const mainAction = () => {
  run(GREETING, logicGame);
};
