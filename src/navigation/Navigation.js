import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './Navigation.module.scss'

function Navigation() {
  const history = useHistory();

  const logOut = e => {
    e.preventDefault();
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <div className={styles.navigation}>
      <h2><i className={styles.icon} class="fab fa-youtube" /> Youtube Clone</h2>
      <div className={styles.menuItems}>
        <p onClick={() => history.push('/register')}>Register</p>
        <p onClick={() => history.push('/contact')}>Contact</p>
        <i class="fas fa-sign-out-alt" onClick={logOut} />
      </div>
    </div>
  )
}

export default Navigation
