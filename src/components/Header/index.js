import React, { Component } from 'react';
import exit from 'img/exit-white.png';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Header extends Component {
  handleClickExit = () => {
    const { history } = this.props;
    history.push('/');
  };

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
            <div className={styles.exitAccount} onClick={this.handleClickExit} style={{ backgroundImage: `url("${exit}")` }} />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Header;
