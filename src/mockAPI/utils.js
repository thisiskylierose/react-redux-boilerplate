const randomDelay = (delay = 1000) => Math.floor(Math.random() * delay) + 500;

const promiseDelay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export { randomDelay, promiseDelay, getRandomInt };
