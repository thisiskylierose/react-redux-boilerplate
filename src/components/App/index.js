import React from 'react';
import { hot } from 'react-hot-loader/root';

import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <span className={styles.alert}>This works</span>
    </div>
  </div>
);

export default hot(App);
