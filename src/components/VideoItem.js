import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'

function VideoItem({ video, onSelect }) {
  return (
    <Grid item xs={12} style={{ padding: '20px' }}>
      <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'rgba(255, 255, 255, .8)' }} onClick={() => onSelect(video)}>
        <img style={{ marginRight: '20px' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
        <Typography variant='subtitle1'>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem
