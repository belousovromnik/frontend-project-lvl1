import _ from 'lodash.sample';
import runEngine from '../engine';
import getRandomCount from '../secFunctions';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const GREETING = 'What is the result of the expression?';

const getLogicGame = () => {
  const firstNum = getRandomCount();
  const secondNum = getRandomCount();
  const operators = _(Object.keys(operations));

  const correctAnswer = String(operations[operators](firstNum, secondNum));
  // строка пользователю с вопросом
  // это не венгерская нотация, это просто перевод с русского на английский
  // фраза - строка вопроса пользователю - userQuestionString
  // не согласен с этим замечанием, переименую, но не согласен
  const question = `${firstNum} ${operators} ${secondNum}`;

  return [question, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, getLogicGame);
};
export default runGame;
