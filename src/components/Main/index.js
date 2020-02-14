import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import styles from './style.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.mainContent}>
          <Link to="/main/create-test" className={styles.btnCreateTest}>Создать тест</Link>
          <div className={styles.testList}>
            <div className={styles.listItem}>
              <Link to="/main/test" className={styles.startTest}>Name</Link>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
            <div className={styles.listItem}>
              <Link to="/main/test" className={styles.startTest}>Name</Link>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
            <div className={styles.listItem}>
              <Link to="/main/test" className={styles.startTest}>Name</Link>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
            <div className={styles.listItem}>
              <Link to="/main/test" className={styles.startTest}>Name</Link>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
            <div className={styles.listItem}>
              <Link to="/main/test" className={styles.startTest}>Name</Link>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
