import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import exit from 'img/exit.png';
import styles from './style.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.page}>
          <div className={styles.header}>
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
          <div className={styles.BtnCreateTest}>
            <Link to="/main/create-test">Создать тест</Link>
          </div>
          <div className={styles.testList}>
            <div className={styles.listItem}>
              <div className={styles.itemNameWrapper}>
                <span className={styles.itemName}>Name</span>
              </div>
              <Link to="/main/test" className={styles.runTest}>Пройти тест</Link>
            </div>
            <div className={styles.listItem}>
              <div className={styles.itemNameWrapper}>
                <span className={styles.itemName}>Name</span>
              </div>
              <Link to="/main/test" className={styles.runTest}>Пройти тест</Link>
            </div>
            <div className={styles.listItem}>
              <div className={styles.itemNameWrapper}>
                <span className={styles.itemName}>Name</span>
              </div>
              <Link to="/main/test" className={styles.runTest}>Пройти тест</Link>
            </div>
            <div className={styles.listItem}>
              <div className={styles.itemNameWrapper}>
                <span className={styles.itemName}>Name</span>
              </div>
              <Link to="/main/test" className={styles.runTest}>Пройти тест</Link>
            </div>
            <div className={styles.listItem}>
              <div className={styles.itemNameWrapper}>
                <span className={styles.itemName}>Name</span>
              </div>
              <Link to="/main/test" className={styles.runTest}>Пройти тест</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
