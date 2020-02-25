import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class ModalWindow extends Component {
  handleClickClose =() => {
    const { showModalWindowAction } = this.props;
    showModalWindowAction();
  }

  render() {
    const { contentModalWindow } = this.props;
    return (
      <div className={styles.modalWindow}>
        <div className={styles.modalContent}>
          <div className={styles.btnClose} onClick={this.handleClickClose}>&times;</div>
          Модальное окно
          { contentModalWindow }
        </div>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  contentModalWindow: PropTypes.string.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
};

export default ModalWindow;
