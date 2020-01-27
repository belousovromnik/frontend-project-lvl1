import _ from 'lodash.sample';
import runEngine from '../engine';
import randomCount from '../sec_functions';

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const GREETING = 'What is the result of the expression?';

const logicGame = () => {
  const firstNum = randomCount();
  const secondNum = randomCount();
  const indexOperators = _(Object.keys(operators));

  // верный ответ
  const correctAnswer = String(operators[indexOperators](firstNum, secondNum));
  // строка пользователю с вопросом
  const userQuestionString = `${firstNum} ${indexOperators} ${secondNum}`;

  return [userQuestionString, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, logicGame);
};
export default runGame;
