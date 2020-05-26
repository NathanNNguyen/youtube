import React from 'react'

import { Paper, TextField } from '@material-ui/core'

function SearchBar({ handleSubmit }) {
  const [search, setSearch] = React.useState('')

  const submit = e => {
    e.preventDefault()
    handleSubmit(search)
  }

  return (
    <Paper elevation={5} style={{ padding: '25px' }}>
      <form onSubmit={submit}>
        <TextField
          fullWidth
          label='Search...'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </Paper>
  )
}

export default SearchBar
