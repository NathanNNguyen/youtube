import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import AxiosWithAuth from '../Utils/AxiosWithAuth';
import styles from './Register.module.scss';

function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post('/auth/register', user)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch(err => console.log(err));
  }
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h2 className={styles.headline}>Hello, Friend!</h2>
        <p className={styles.par}>
          New users? Don't worry, let's get started by entering your personal credentials
        </p>
        <button
          className={styles.btn}
          onClick={() => history.push('/')}>
          Log In
        </button>
      </div>
      <form onSubmit={register} className={styles.second}>
        <h2 className={styles.headline}>Register</h2>
        <input
          className={styles.i}
          type='text'
          name='username'
          placeholder='Username'
          value={user.username}
          onChange={handleChange}
        />
        <input
          className={styles.i}
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={handleChange}
        />
        <button className={styles.btn}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
