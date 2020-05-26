import React from 'react'

import { Paper, Typography } from '@material-ui/core'

function VideoDetails({ selected }) {
  if (!selected) return <div>Loading video...</div>

  console.log(selected)
  const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`
  return (
    <>
      <Paper elevation={6} style={{ height: '70%' }}>
        <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoSrc} />
      </Paper>
      <Paper elevation={6} styled={{ padding: '15px' }}>
        <Typography variant='h4'>{selected.snippet.title} - {selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle1'>{selected.snippet.channelTitle}</Typography>
        <Typography variant='subtitle2'>{selected.snippet.description}</Typography>
      </Paper>
    </>
  )
}

export default VideoDetails
