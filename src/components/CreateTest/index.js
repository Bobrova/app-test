import React, { Component } from 'react';
import Header from 'components/Header';
import styles from './style.scss';

class CreateTest extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.pageWrapper}>
          <Header />
          <div className={styles.mainCreateTest}>
            <div className={styles.nameTest}>
              <label forhtml="nameTest" className={styles.labelNameTest}>
                Название теста
                <input type="text" className={styles.inputNameTest} name="nameTest" placeholder="Название теста" />
              </label>
            </div>
            <div className={styles.btnAddQuestion}>Добавить вопрос</div>
            <div className={styles.questionList}>
              <div className={styles.listItem}>
                <p className={styles.questionName}>Name</p>
              </div>
              <div className={styles.listItem}>
                <p className={styles.questionName}>Name</p>
              </div>
              <div className={styles.listItem}>
                <p className={styles.questionName}>Name</p>
                <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
                <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
              </div>
              <div className={styles.listItem}>
                <p className={styles.questionName}>Name</p>
              </div>
              <div className={styles.listItem}>
                <p className={styles.questionName}>Name</p>
              </div>
            </div>
          </div>
          <div className={styles.blockSaveCancel}>
            <div className={styles.btnSave}>Сохранить</div>
            <div className={styles.btnCancel}>Отмена</div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateTest;
