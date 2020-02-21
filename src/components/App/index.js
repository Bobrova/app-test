import React, { Component } from 'react';
import PropTypes from 'prop-types';
import background from 'img/wall.jpg';
import loginImg from 'img/cat2.png';
import styles from './style.scss';

class App extends Component {
  handleClickEnter = () => {
    const { history } = this.props;
    if (this.validateForm()) history.push('/main/');
  }

  validateForm = () => {
    const login = document.forms.myForm.login.value;
    const password = document.forms.myForm.password.value;
    if (login === '') {
      console.log('Вы не ввели логин');
      alert('Необходимо ввести имя');
      return false;
    }
    if (password === '') {
      console.log('Вы не ввели пароль');
      alert('Необходимо ввести пароль');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={styles.page} style={{ backgroundImage: `URL("${background}")` }}>
        <div className={styles.loginForm}>
          <div className={styles.loginImg} style={{ backgroundImage: `URL("${loginImg}")` }} />
          <form className={styles.form} name="myForm">
            <input type="text" className={styles.input} placeholder="Логин" name="login" />
            <input type="password" className={styles.input} placeholder="Пароль" name="password" />
          </form>
          <div className={styles.btnAuthorization} onClick={this.handleClickEnter}>Войти</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
