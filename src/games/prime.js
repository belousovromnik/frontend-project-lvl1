import runEngine from '../engine';
import getRandomCount from '../secFunctions';

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

const getLogicGame = () => {
  const question = getRandomCount();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, getLogicGame);
};
export default runGame;
