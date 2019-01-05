import fetchCounter from '../mockAPI/counter';
import fetchGreeting from '../mockAPI/greeting';

const loaders = {
  counter: fetchCounter,
  greeting: fetchGreeting
};

export default loaders;
