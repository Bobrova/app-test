import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import styles from './style.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.pageWrapper}>
          <Header />
          <Link to="/main/create-test" className={styles.btnCreateTest}>Создать тест</Link>
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
