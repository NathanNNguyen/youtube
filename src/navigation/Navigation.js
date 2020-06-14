import React, { useState } from 'react'

import styles from './Navigation.module.scss'

function Navigation() {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.navigation}>
      <i className={styles.icon} class="fab fa-youtube" />
      <h2 className={styles.navTitle}>Youtube Clone</h2>
      <div className={styles.menu}>
        <i class="fas fa-bars" className={styles.menuIcon} onClick={() => setMenu(!menu)} />
        <div className={styles.menuItems}>
          <a href='/'>Log in</a>
          <a href='/register'>Register</a>
          <a href='/'>Log out</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation
