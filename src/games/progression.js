import runEngine from '../engine';
import randomCount from '../sec_functions';

const GREETING = 'What number is missing in the progression?';
// длина ряда
const progressionLength = 10;

const logicGame = () => {
  // номер скрытой позиции
  const hiddenItemNumber = randomCount(1, progressionLength);
  // величина итерации данного ряда
  // ограничил величину итерации длиной прогрессии
  // величины независимы друг от друга, можно было взять любое произвольное число
  // в качестве промежутка для выбора величины итерации ряда
  const rowIterationSize = randomCount(1, progressionLength);
  const firstNum = randomCount();
  // прогрессия, заносим первый элемент ряда
  const progression = [String(firstNum)];

  // верный ответ
  let correctAnswer = 0;
  // заносим остальные элементы ряда
  for (let item = 1; item < progressionLength; item += 1) {
    const itemNumber = firstNum + rowIterationSize * item;
    if (item === hiddenItemNumber) {
      // заменяем скрытую позицию
      progression.push('..');
      correctAnswer = itemNumber;
    } else {
      progression.push(String(itemNumber));
    }
  }
  // строка пользователю с вопросом
  const userQuestionString = progression.join(' ');

  return [userQuestionString, String(correctAnswer)];
};

const runGame = () => {
  runEngine(GREETING, logicGame);
};
export default runGame;
