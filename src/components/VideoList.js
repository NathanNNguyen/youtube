import React from 'react'
import { Grid } from '@material-ui/core'

import VideoItem from './VideoItem'

function VideoList({ videos, onSelect }) {

  const list = videos.map((video, i) => <VideoItem onSelect={onSelect} key={i} video={video} />)

  return (
    <Grid container spacing={10}>
      {list}
    </Grid>
  )
}

export default VideoList
