import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Login.module.scss';

function Login() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h2 className={styles.headline}>Sign In</h2>
        <input className={styles.i} type='text' placeholder='Username' />
        <input className={styles.i} type='password' placeholder='Password' />
        <button className={styles.btn}>Sign In</button>
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
