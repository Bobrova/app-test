import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import background from 'img/wall.jpg';
import loginImg from 'img/cat2.png';
import styles from './style.scss';

class App extends Component {
  handleClickEnter = () => {
    if (this.validateForm() === 'no') {
      console.log('нет');
    } else {
      console.log('да');
      this.props.history.push('/cources');
    }
  }

  validateForm = () => {
    const x = document.forms.myForm.login.value;
    if (x === '') {
      return 'no';
    }
    return 'yes';
    // <Link to="/main/" className={styles.btnLogin}>Войти</Link>
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
          <div className={styles.btnLogin} onClick={this.handleClickEnter}>Войти</div>
        </div>
      </div>
    );
  }
}
export default App;
