import _ from 'lodash.sample';

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const operatorDict = {
  '+': add,
  '-': sub,
  '*': mul,
};

export function greeting() {
  return 'What is the result of the expression?';
}


export const mainAction = () => {
  const firstNum = Math.floor((Math.random() * 100) + 1);
  const secondNum = Math.floor((Math.random() * 100) + 1);
  const indexOperatorDict = _(Object.keys(operatorDict));

  const correctAns = String(operatorDict[indexOperatorDict](firstNum, secondNum));

  const strToQuestion = `${firstNum} ${indexOperatorDict} ${secondNum}`;

  return [strToQuestion, correctAns];
};
