import React from 'react';

import styles from './greeting.css';

class GreetingPage extends React.Component {
  componentDidMount() {
    const { actions, state } = this.props;

    if (!state.greeting.initialFetch) {
      actions.greeting.setInitialValue();
    }
  }

  render() {
    const { state } = this.props;

    return (
      <div className={styles.greeting}>
        {state.greeting.initialFetch && `${state.greeting.message}`}
        {!state.greeting.initialFetch && (
          <span className={styles.loading}>
            <span className={styles.spinner} />
          </span>
        )}
      </div>
    );
  }
}

export default GreetingPage;
