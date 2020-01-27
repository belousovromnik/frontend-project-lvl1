import runEngine from '../engine';
import randomCount from '../sec_functions';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  if (number < 2 || number % 2 === 0) {
    return false;
  }
  const sqrtNumber = Math.floor(Math.sqrt(number));
  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logicGame = () => {
  const question = randomCount();

  // верный ответ
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  // строка пользователю с вопросом
  const userQuestionString = String(question);

  return [userQuestionString, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, logicGame);
};
export default runGame;
