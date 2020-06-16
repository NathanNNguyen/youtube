import React, { useState } from 'react'

import { Paper, TextField } from '@material-ui/core'
import styles from '../App.module.scss'

function SearchBar({ handleSubmit }) {
  const [search, setSearch] = useState('')

  const submit = e => {
    e.preventDefault()
    handleSubmit(search)
    setSearch('')
  }

  return (
    <Paper elevation={5} style={{ padding: '25px', background: 'rgba(255, 255, 255, .8)' }}>
      <form onSubmit={submit}>
        <TextField
          className={styles.input}
          fullWidth
          label='Search...'
          onChange={e => setSearch(e.target.value)}
        />
      </form>
    </Paper>
  )
}

export default SearchBar
