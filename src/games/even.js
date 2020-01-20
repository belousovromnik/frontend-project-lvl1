export function greeting() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export const mainAction = () => {
  const question = Math.floor((Math.random() * 100) + 1);

  let correctAns = 'no';
  if (question % 2 === 0) {
    correctAns = 'yes';
  }

  const strToQuestion = String(question);

  return [strToQuestion, correctAns];
};
