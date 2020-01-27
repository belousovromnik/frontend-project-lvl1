// выводит случайное число от начального до конечного элемента включительно
// нет необходимости начинать с 0 либо заканчивать 101
const randomCount = (bProg = 1, eProg = 100) => Math.floor((Math.random() * eProg) + bProg);
export default randomCount;
