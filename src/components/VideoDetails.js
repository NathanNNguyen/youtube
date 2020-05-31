import React from 'react'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { easeQuadInOut } from 'd3-ease';
import { Paper, Typography } from '@material-ui/core'

// import AnimatedProgressProvider from './AnimatedProgressProvider'

function VideoDetails({ selected }) {
  if (!selected) return <h3 style={{ textAlign: 'center', width: '160%' }}>NO VIDEO CHOSEN YET!</h3>

  // if (!selected) return (
  //   <AnimatedProgressProvider
  //     valueStart={0}
  //     valueEnd={99}
  //     duration={4}
  //     easingFunction={easeQuadInOut}
  //     repeat
  //     style={{ textAlign: 'center', width: '160%' }}
  //   >
  //     {value => {
  //       const roundedValue = Math.round(value);
  //       return (
  //           <CircularProgressbar
  //           value={value}
  //           text={`${roundedValue}%`}
  //           // styles={buildStyles({ pathTransition: "none", textSize: '5px' })}
  //           style={{ pathTransition: 'none', fontSize: '1px' }}
  //         /> 
  //       );
  //     }}
  //   </AnimatedProgressProvider>
  // )

  console.log(selected)
  const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`
  return (
    <>
      <Paper elevation={6} style={{ height: '30%' }}>
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
