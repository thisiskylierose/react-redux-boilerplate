import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import appRoutes from '../routes';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import Navigation from './Navigation';

import '../styles/global.css';
import styles from './app.css';

const AppComponent = props => (
  <div className={styles.container}>
    <nav className={styles.navigation}>
      <Navigation appRoutes={appRoutes} />
    </nav>
    <div className={styles.content}>
      {appRoutes.map(route => {
        const { path, index, component: PageComponent } = route;
        const isExact = path === '/';

        return (
          <Route
            key={index}
            path={path}
            exact={isExact}
            render={() => <PageComponent {...props} />}
          />
        );
      })}
    </div>
  </div>
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent)
);
