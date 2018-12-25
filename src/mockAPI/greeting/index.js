import { randomDelay, promiseDelay, getRandomInt } from '../utils';

import greetings from './data';

const fetchGreeting = () =>
  promiseDelay(randomDelay()).then(() => {
    const key = getRandomInt(0, greetings.length);
    const value = greetings[key];

    return {
      greeting: { value }
    };
  });

export default fetchGreeting;
