import React, { Component } from 'react';
import PropTypes from 'prop-types';
import background from 'img/wall.jpg';
import loginImg from 'img/cat2.png';
import { adminData } from 'constants/constants';
import { ENTER_KEY_CODE } from '../../constants/constants';
import styles from './style.scss';

class App extends Component {
  handleClickEnter = () => {
    const { history } = this.props;
    const login = document.forms.myForm.login.value;
    const password = document.forms.myForm.password.value;
    if (this.validateForm(login, password)) {
      history.push('/main/');
    } else {
      return;
    }
    this.authorization(login, password);
  }

  authorization = (login, password) => {
    const { changeAccessRights, addDataUser } = this.props;
    if (adminData.login === login && adminData.password === password) {
      changeAccessRights(true);
      addDataUser({ login, password });
    } else {
      changeAccessRights(false);
      addDataUser({ login, password });
    }
  }

  validateForm = (login, password) => {
    if (login === '') {
      return false;
    }
    if (password === '') {
      return false;
    }
    return true;
  }

  handleKeyDown = e => {
    const { history } = this.props;
    const login = document.forms.myForm.login.value;
    const password = document.forms.myForm.password.value;
    if (e.keyCode === ENTER_KEY_CODE) {
      if (this.validateForm(login, password)) {
        history.push('/main/');
      } else {
        return;
      }
    }
    this.authorization(login, password);
  }

  render() {
    return (
      <div className={styles.page} style={{ backgroundImage: `URL("${background}")` }}>
        <div className={styles.loginForm}>
          <div className={styles.loginImg} style={{ backgroundImage: `URL("${loginImg}")` }} />
          <form className={styles.form} name="myForm">
            <input type="text" className={styles.input} placeholder="Логин" name="login" onKeyDown={this.handleKeyDown} required />
            <input type="password" className={styles.input} placeholder="Пароль" name="password" onKeyDown={this.handleKeyDown} required />
            <input type="submit" className={styles.btnAuthorization} onClick={this.handleClickEnter} value="Войти" />
          </form>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  changeAccessRights: PropTypes.func.isRequired,
  addDataUser: PropTypes.func.isRequired,
};

export default App;
