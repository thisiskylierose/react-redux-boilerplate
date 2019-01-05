import fetchCounter from '../mockAPI/counter';
import fetchGreeting from '../mockAPI/greeting';

const loaders = {
  counter: fetchCounter,
  greeting: fetchGreeting
};

const getDataLoaders = routeloaders => {
  if (routeloaders) {
    return routeloaders.reduce((accumlator, loader) => {
      if (loaders[loader]) {
        return [...accumlator, loaders[loader]()];
      }

      return accumlator;
    }, []);
  }

  return [];
};

export default getDataLoaders;
