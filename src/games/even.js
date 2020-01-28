import runEngine from '../engine';
import getRandomCount from '../secFunctions';

const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => !(number % 2);

const getLogicGame = () => {
  const question = getRandomCount();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, getLogicGame);
};
export default runGame;
