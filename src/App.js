import React from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api';
import { SearchBar, VideoList, VideoDetails } from './components'

class App extends React.Component {
  state = {
    videos: [],
    selected: null
  }


  // const [videos, setVideos] = useState([]);
  // const [selected, setSelected] = useState(null)

  // useEffect(() => {
  //   handleSubmit('avengers')
  // }, [])

  handleSubmit = async searchTerm => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    });
    this.setState({ ...this.state, videos: res.data.items, selected: res.data.items[0] })
    // setSeleted(res.data.items[0])
  }

  onSelect = video => {
    this.setState({ selected: video })
  }

  render() {
    const { handleSubmit, videos, selected, onSelect } = this.state
    return (
      // <div style={{ background: 'black', height: '100vh' }}>
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
      </Grid >
      // </div>
    )
  }
}

export default App
