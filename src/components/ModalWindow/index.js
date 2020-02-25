import React, { Component } from 'react';
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
    const { contentModalWindow } = this.props;
    return (
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>
          <div className={styles.btnClose} onClick={this.handleClickClose}>&times;</div>
          Модальное окно
          { contentModalWindow }
          <div className={styles.controlBtn}>
            <div className={styles.btn} onClick={this.handleClickConfirm}>Подтвердить</div>
            <div className={styles.btn} onClick={this.handleClickCancel}>Отмена</div>
          </div>
        </div>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  contentModalWindow: PropTypes.string.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  clickConfirm: PropTypes.func.isRequired,
};

export default ModalWindow;
