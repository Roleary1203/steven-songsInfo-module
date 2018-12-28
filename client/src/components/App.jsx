import React from 'react';
import SongsInfo from './SongsInfo.jsx';
import SongsDesc from './SongsDesc.jsx';
import Artist from './Artist.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsInfo: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/songs-info')
      .then(res => {
        console.log(res.data);
        this.setState({
          songsInfo: res.data
        });
      })
      .catch(err => {
        console.log('client GET is not working!', err);
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.songsInfo.map(songInfo => {
            console.log(songInfo.artist_followers);
            return (
              <div>
                <SongsInfo
                  key={songInfo.id}
                  plays={songInfo.plays}
                  likes={songInfo.likes}
                  reposts={songInfo.reposts}
                />
                <SongsDesc desc={songInfo.description} />
                <Artist
                  artist={songInfo.artist}
                  artFol={songInfo.artist_followers}
                  artTra={songInfo.artist_tracks}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
