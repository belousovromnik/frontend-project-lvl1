import run from '../engine';
import randomCount from '../sec_functions';

export const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => !(number % 2);

export const logicGame = () => {
  const question = randomCount();

  const correctAns = isEven(question) ? 'yes' : 'no';
  const strToQuestion = String(question);

  return [strToQuestion, correctAns];
};

export const mainAction = () => {
  run(GREETING, logicGame);
};
