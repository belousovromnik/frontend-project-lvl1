// выводит случайное число от начального до конечного элемента включительно
// нет необходимости начинать с 0 либо заканчивать 101
const getRandomCount = (
  beginElement = 1,
  endElement = 100,
) => Math.floor((Math.random() * endElement) + beginElement);
export default getRandomCount;
