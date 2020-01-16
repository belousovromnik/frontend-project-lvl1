import _ from 'lodash.sample';

import {
  getRandomInt,
  add,
  sub,
  mul,
} from '../engine';


export function greeting() {
  return 'What is the result of the expression?';
}

export const mainAction = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const operatorDict = {
    '+': add,
    '-': sub,
    '*': mul,
  };
  const indexOperatorDict = _(Object.keys(operatorDict));

  const correctAns = String(operatorDict[indexOperatorDict](firstNum, secondNum));

  const strToQuestion = `${firstNum} ${indexOperatorDict} ${secondNum}`;

  return [strToQuestion, correctAns];
};
