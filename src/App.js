import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api';
import { SearchBar, VideoList, VideoDetails } from './components'

function App() {

  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null)

  const handleSubmit = async searchTerm => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });
    setVideos(res.data.items)
    setSelected(res.data.items[0])
  }

  return (
    <Grid justify='center' container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar handleSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails selected={selected} />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
