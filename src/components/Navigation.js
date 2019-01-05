import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.css';

class Navigation extends React.Component {
  getIsActive = (match, location) => {
    if (match) {
      return match.url === location.pathname;
    }

    return false;
  };

  render() {
    return (
      <ul className={styles.list}>
        {this.props.appRoutes.map((route, index) => {
          if (route.title) {
            return (
              <li key={`nav-${index}`} className={styles.item}>
                <NavLink
                  to={route.path}
                  isActive={this.getIsActive}
                  activeClassName={styles.active}
                >
                  {route.title}
                </NavLink>
              </li>
            );
          }

          return null;
        })}
      </ul>
    );
  }
}

export default Navigation;
