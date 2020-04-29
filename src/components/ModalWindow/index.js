import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styles from './style.scss';

class ModalWindow extends Component {
  handleClickClose =() => {
    const { showModalWindowAction } = this.props;
    showModalWindowAction(false);
  }

  handleClickConfirm = () => {
    const { showModalWindowAction, clickConfirm } = this.props;
    showModalWindowAction(false);
    clickConfirm();
  }

  handleClickCancel = () => {
    const { showModalWindowAction } = this.props;
    showModalWindowAction(false);
  }

  render() {
    const {
      contentModalWindow,
      typeModalWindow,
      title,
    } = this.props;
    const modalResultTest = (
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>
          <div className={styles.btnClose} onClick={this.handleClickClose}>&times;</div>
          <div className={styles.titleModal}>{title}</div>
          <div className={styles.modalText}>
            Количество правильных ответов:
            {contentModalWindow.text}
          </div>
          <div className={styles.controlBtn}>
            <div className={styles.btn} onClick={this.handleClickConfirm}>
              Вурнуться к списку тестов
            </div>
          </div>
        </div>
      </div>
    );
    const modalConfirm = (
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>
          <div className={styles.titleModal}>{title}</div>
          <div className={styles.btnClose} onClick={this.handleClickClose}>&times;</div>
          <div className={styles.modalText}>{contentModalWindow.text}</div>
          <div className={styles.controlBtn}>
            <div className={styles.btn} onClick={this.handleClickConfirm}>Подтвердить</div>
            <div className={styles.btn} onClick={this.handleClickCancel}>Отмена</div>
          </div>
        </div>
      </div>
    );
    return ReactDom.createPortal(
      <>
        {typeModalWindow === 'Результаты' && modalResultTest}
        {typeModalWindow === 'Подтверждение' && modalConfirm}
      </>,
      document.getElementById('modal-root'),
    );
  }
}

ModalWindow.propTypes = {
  contentModalWindow: PropTypes.object.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  clickConfirm: PropTypes.func.isRequired,
  typeModalWindow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalWindow;
