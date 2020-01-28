import runEngine from '../engine';
import getRandomCount from '../secFunctions';

const GREETING = 'What number is missing in the progression?';
// длина ряда
const progressionLength = 10;

const getLogicGame = () => {
  // номер скрытой позиции
  const hiddenItemNumber = getRandomCount(0, progressionLength - 1);
  // величина итерации данного ряда
  // ограничил величину итерации длиной прогрессии
  // величины независимы друг от друга, можно было взять любое произвольное число
  // в качестве промежутка для выбора величины итерации ряда
  const rowIterationStep = getRandomCount(1, progressionLength);
  const firstNum = getRandomCount();
  const progression = [];

  // все же считаю, что лучше определить переменную с верным ответом до цикла
  // можно было определить в теле цикла
  // const correctAnswer = itemNumber;
  // но я считаю, что такой вариант хуже
  let correctAnswer = 0;
  // заносим остальные элементы ряда
  for (let item = 0; item < progressionLength; item += 1) {
    const itemNumber = firstNum + rowIterationStep * item;
    if (item === hiddenItemNumber) {
      // заменяем скрытую позицию
      progression.push('..');
      correctAnswer = itemNumber;
    } else {
      progression.push(itemNumber);
    }
  }

  return [progression.join(' '), String(correctAnswer)];
};

const runGame = () => {
  runEngine(GREETING, getLogicGame);
};
export default runGame;
