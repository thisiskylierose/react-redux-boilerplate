import fetchCounter from '../mockAPI/counter';
import fetchGreeting from '../mockAPI/greeting';

const dataLoaders = {
  counter: fetchCounter,
  greeting: fetchGreeting
};

export default dataLoaders;
