import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function VideoDetails({ selected }) {
  if (!selected) return <h3 style={{ textAlign: 'center', width: '160%' }}>NO VIDEO CHOSEN YET!</h3>

  const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`
  return (
    <>
      <Paper elevation={6} style={{ height: '90%' }}>
        <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant='h5'>{selected.snippet.title} - {selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle1'>{selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle2'>{selected.snippet.description}</Typography>
      </Paper>
    </>
  )
}

export default VideoDetails
