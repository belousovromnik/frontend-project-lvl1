import runEngine from '../engine';
import randomCount from '../sec_functions';

const GREETING = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => !(number % 2);

const logicGame = () => {
  const question = randomCount();
  // верный ответ
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  // строка пользователю с вопросом
  const userQuestionString = String(question);

  return [userQuestionString, correctAnswer];
};

const runGame = () => {
  runEngine(GREETING, logicGame);
};
export default runGame;
