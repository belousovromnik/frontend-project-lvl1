import runEngine from '../engine';
import randomCount from '../sec_functions';

const euclideanAlgorithm = (a, b) => {
  // остаток от деления
  const remainderOfDivision = a % b;
  if (remainderOfDivision === 0) {
    return b;
  }
  return euclideanAlgorithm(b, remainderOfDivision);
};

const GREETING = 'Find the greatest common divisor of given numbers.';

const logicGame = () => {
  const firstNum = randomCount();
  const secondNum = randomCount();

  // верный ответ
  const correctAnswer = String(euclideanAlgorithm(firstNum, secondNum));
  // строка пользователю с вопросом
  const userQuestionString = `${firstNum} ${secondNum}`;

  return [userQuestionString, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, logicGame);
};
export default runGame;
