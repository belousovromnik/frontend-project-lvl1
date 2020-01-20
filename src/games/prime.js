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

export const GREETING = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const mainAction = () => {
  const question = Math.floor((Math.random() * 100) + 1);
  const strToQuestion = String(question);

  let correctAns = 'no';
  if (isPrime(question)) {
    correctAns = 'yes';
  }

  return [strToQuestion, correctAns];
};
