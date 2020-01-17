import { getRandomInt } from '../engine';

export function greeting() {
  return 'What number is missing in the progression?';
}

export const mainAction = () => {
  // длина ряда
  const progressionLength = 10;
  // номер скрытой позиции
  const hiddenItemNumber = getRandomInt(1, progressionLength);
  // величина итерации данного ряда
  const rowIterationSize = getRandomInt(1, progressionLength);
  const firstNum = getRandomInt();
  // прогрессия
  const progression = [String(firstNum)];

  let correctAns = 0;

  for (let item = 1; item < progressionLength + 1; item += 1) {
    const itemNumber = firstNum + rowIterationSize * item;
    if (item === hiddenItemNumber) {
      progression.push('..');
      correctAns = itemNumber;
    } else {
      progression.push(String(itemNumber));
    }
  }

  const strToQuestion = progression.join(' ');
  correctAns = String(correctAns);

  return [strToQuestion, correctAns];
};
