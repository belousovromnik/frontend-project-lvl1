export const GREETING = 'What number is missing in the progression?';

export const mainAction = () => {
  // длина ряда
  const progressionLength = 10;
  // номер скрытой позиции
  const hiddenItemNumber = Math.floor((Math.random() * progressionLength) + 1);
  // величина итерации данного ряда
  const rowIterationSize = Math.floor((Math.random() * progressionLength) + 1);
  const firstNum = Math.floor((Math.random() * 100) + 1);
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
