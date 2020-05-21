import React, { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';

import PropTypes from 'prop-types';

import { ESC_KEY_CODE } from 'constants/constants';

import styles from './style.scss';

const ModalWindow = ({
  contentModalWindow,
  typeModalWindow,
  title,
  showModalWindowAction,
  clickConfirm,
}) => {
  const popUpRef = useRef(null);

  const handleOutsideClick = e => {
    if (!e.composedPath().includes(popUpRef.current)) {
      showModalWindowAction(false);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === ESC_KEY_CODE) {
      showModalWindowAction(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick, false);
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, false);
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  });

  const handleClickClose = () => {
    showModalWindowAction(false);
  };

  const handleClickConfirm = () => {
    showModalWindowAction(false);
    clickConfirm();
  };

  const handleClickCancel = () => {
    showModalWindowAction(false);
  };

  const modalResultTest = (
    <div className={styles.modalWindow}>
      <div className={styles.modalContent} ref={popUpRef}>
        <div className={styles.btnClose} onClick={handleClickClose} />
        <div className={styles.titleModal}>{title}</div>
        <div className={styles.modalText}>
          Количество правильных ответов:
          {contentModalWindow.text}
        </div>
        <div className={styles.controlBtn}>
          <div className={styles.btn} onClick={handleClickConfirm}>
            Вурнуться к списку тестов
          </div>
        </div>
      </div>
    </div>
  );
  const modalConfirm = (
    <div className={styles.modalWindow}>
      <div className={styles.modalContent} ref={popUpRef}>
        <div className={styles.titleModal}>{title}</div>
        <div className={styles.btnClose} onClick={handleClickClose} />
        <div className={styles.modalText}>{contentModalWindow.text}</div>
        <div className={styles.controlBtn}>
          <div className={styles.btn} onClick={handleClickConfirm}>Подтвердить</div>
          <div className={styles.btn} onClick={handleClickCancel}>Отмена</div>
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
};

ModalWindow.propTypes = {
  contentModalWindow: PropTypes.object.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  clickConfirm: PropTypes.func.isRequired,
  typeModalWindow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalWindow;
