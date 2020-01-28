import runEngine from '../engine';
import getRandomCount from '../secFunctions';

const findGcd = (a, b) => {
  // остаток от деления
  const remainderOfDivision = a % b;
  if (remainderOfDivision === 0) {
    return b;
  }
  return findGcd(b, remainderOfDivision);
};

const GREETING = 'Find the greatest common divisor of given numbers.';

const getLogicGame = () => {
  const firstNum = getRandomCount();
  const secondNum = getRandomCount();

  const correctAnswer = String(findGcd(firstNum, secondNum));
  // строка пользователю с вопросом
  // это не венгерская нотация, это просто перевод с русского на английский
  // фраза - строка вопроса пользователю - userQuestionString
  // не согласен с этим замечанием, переименую, но не согласен
  const question = `${firstNum} ${secondNum}`;

  return [question, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, getLogicGame);
};
export default runGame;
