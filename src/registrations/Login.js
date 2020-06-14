import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AxiosWithAuth from '../Utils/AxiosWithAuth';
import styles from './Login.module.scss';

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = () => {
    AxiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        history.push('/home')
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h2 className={styles.headline}>Sign In</h2>
        <input
          className={styles.i}
          name='username'
          type='text'
          placeholder='Username'
          onChange={handleChanges}
        />
        <input
          className={styles.i}
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChanges}
        />
        <button className={styles.btn}
          onClick={submit}
        >Sign In</button>
      </div>
      <div className={styles.second}>
        <h2 className={styles.headline}>Welcome Back!</h2>
        <p className={styles.par}>To keep connected with us please login with your personal info</p>
        <button className={styles.btn}
          onClick={() => history.push('/register')}
        >Sign Up</button>
      </div>
    </div>
  )
}

export default Login
