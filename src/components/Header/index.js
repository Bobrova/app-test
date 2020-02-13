import React, { Component } from 'react';
import exit from 'img/exit.png';
import styles from './style.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <span className={styles.logoTextTop}>test</span>
            <span className={styles.logoTextBottom}>pro</span>
          </div>
          <div className={styles.userData}>
            <div className={styles.userGreeting}>
              <p className={styles.greetingText}>Добро пожаловать Name</p>
            </div>
            <div className={styles.exitAccount} style={{ backgroundImage: `url("${exit}")` }} />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
