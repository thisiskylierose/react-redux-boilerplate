import { randomDelay, promiseDelay, getRandomInt } from '../utils';

import greetings from './data';

const fetchGreeting = () =>
  promiseDelay(randomDelay()).then(() => {
    const key = getRandomInt(0, greetings.length);
    const message = greetings[key];

    return {
      greeting: { message }
    };
  });

export default fetchGreeting;
