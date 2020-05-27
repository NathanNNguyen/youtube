import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api';
import { SearchBar, VideoList, VideoDetails } from './components'

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    handleSubmit('iron man vs thanos')
  }, [])

  const handleSubmit = async searchTerm => {
    const { data: { items: videos } } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });
    setVideos(videos)
    setSelected(videos[0])
  }

  const onSelect = video => {
    return setSelected(video)
  }

  return (
    <>
      {/* // <div style={{ background: 'black', height: '100vh' }}> */}
      <Grid justify='center' container spacing={10} style={{ maxWidth: '90%', margin: '0 auto' }}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar handleSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails selected={selected} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onSelect={onSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  )
}

export default App
