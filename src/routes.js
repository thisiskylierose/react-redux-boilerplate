import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import GreetingPage from './components/GreetingPage';

const routes = [
  {
    path: '/',
    component: GreetingPage,
    index: 'home',
    title: 'Home',
    loaders: ['greeting']
  },
  {
    path: '/counter',
    component: CounterPage,
    index: 'counter',
    title: 'Counter',
    loaders: ['counter']
  },
  {
    path: '/greeting',
    component: GreetingPage,
    index: 'greeting',
    title: 'Greeting',
    loaders: ['greeting']
  }
];

export default routes;
