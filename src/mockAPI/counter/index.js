import { randomDelay, promiseDelay, getRandomInt } from '../utils';

const fetchCounter = () =>
  promiseDelay(randomDelay()).then(() => ({
    counter: { value: getRandomInt(1, 100) }
  }));

export default fetchCounter;
