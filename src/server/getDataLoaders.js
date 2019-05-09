import fetchCounter from '../mockAPI/counter';
import fetchGreeting from '../mockAPI/greeting';

const dataLoaders = {
  counter: fetchCounter,
  greeting: fetchGreeting
};

const getDataLoaders = routeloaders => {
  if (routeloaders) {
    return routeloaders.reduce((accumlator, loader) => {
      if (dataLoaders[loader]) {
        return [...accumlator, dataLoaders[loader]()];
      }

      return accumlator;
    }, []);
  }

  return [];
};

export default getDataLoaders;
