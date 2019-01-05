import React from 'react';
import { connect } from 'react-redux';

import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

import '../styles/global.css';
import styles from './app.css';

class AppComponent extends React.Component {
  componentDidMount() {
    const { actions, state } = this.props;

    if (!state.greeting.initialFetch) {
      actions.greeting.setInitialValue();
    }
  }

  render() {
    const { state } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            {state.greeting.initialFetch && `${state.greeting.message}`}
            {!state.greeting.initialFetch && (
              <span className={styles.loading}>
                <span className={styles.spinner} />
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
