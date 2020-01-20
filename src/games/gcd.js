const euclideanAlgorithm = (a, b) => {
  // остаток от деления
  const remainderOfDivision = a % b;
  if (remainderOfDivision === 0) {
    return b;
  }
  return euclideanAlgorithm(b, remainderOfDivision);
};

export function greeting() {
  return 'Find the greatest common divisor of given numbers.';
}

export const mainAction = () => {
  const firstNum = Math.floor((Math.random() * 100) + 1);
  const secondNum = Math.floor((Math.random() * 100) + 1);

  const correctAns = String(euclideanAlgorithm(firstNum, secondNum));

  const strToQuestion = `${firstNum} ${secondNum}`;

  return [strToQuestion, correctAns];
};
