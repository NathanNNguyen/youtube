import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function VideoDetails({ selected }) {
  if (!selected) return <p style={{ textAlign: 'center', width: '153%', color: 'rgba(255, 255, 255, .8)' }}>Please proceed to search for a video...</p>

  const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`
  return (
    <>
      <Paper elevation={6} style={{ height: '90%' }}>
        <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{ padding: '15px', background: 'rgba(255, 255, 255, .8)' }}>
        <Typography variant='h5'>{selected.snippet.title} - {selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle1'>{selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle2'>{selected.snippet.description}</Typography>
      </Paper>
    </>
  )
}

export default VideoDetails
