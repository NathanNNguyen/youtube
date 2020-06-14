import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import youtube from '../api';
import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'
import VideoDetails from './VideoDetails.js'

const Home = () => {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null)

  // useEffect(() => {
  //   handleSubmit('iron man vs thanos')
  // }, [])

  const handleSubmit = async searchTerm => {
    const { data: { items: videos } } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 3,
        key: process.env.REACT_APP_KEY,
        q: searchTerm
      }
    });
    setVideos(videos)
    setSelected(videos[0])
  }

  const onSelect = video => {
    return setSelected(video)
  }

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/')
  }

  return (
    <>
      {/* // <div style={{ background: 'black', height: '100vh' }}> */}
      <Grid justify='center' container spacing={10} style={{ maxWidth: '90%', margin: '0 auto' }}>
        <Grid item xs={12}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <h2>Welcome to youtube clone!</h2>
            <button
              style={{ marginLeft: '30px', zIndex: '10' }}
              onClick={logOut}>
              Log out
            </button>
          </div>
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

export default Home