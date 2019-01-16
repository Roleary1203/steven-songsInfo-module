import React from 'react';
import SongsInfo from './SongsInfo.jsx';
import SongsDesc from './SongsDesc.jsx';
import Artist from './Artist.jsx';
import axios from 'axios';

// const styles = {
//   app: { backgroundColor: 'orange', padding: '5' },
//   songsInfo: { backgroundColor: 'red', padding: '5' }
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsInfo: [],
      id: this.props.id
    };
  }

  componentDidMount() {
    // console.log('WINDOW', window.location.pathname);
    var songId;
    var id = window.location.pathname.slice(
      1,
      window.location.pathname.length - 1
    );
    if (id) {
      songId = Number(id);
    } else {
      songId = this.state.id;
    }
    var info = []
    // console.log('ID', id);
    axios
      .get(`/api/songs-info/${songId}`)
      .then(res => {
        //info.push(res.data)
        //console.log(res.data.rows)
        this.setState({
          songsInfo: res.data.rows
        });
      })
      .catch(err => {
        console.log('client GET is not working!', err);
      });
  }

  render() {
    return (
      <div>
        {this.state.songsInfo.map(songInfo => {
          return (
            <div>
              <SongsInfo
                key={songInfo.id}
                plays={songInfo.plays}
                likes={songInfo.likes}
                reposts={songInfo.reposts}
              />
              <div className="container">
                <Artist
                  artist={songInfo.artist}
                  artFol={songInfo.artist_followers}
                  artTra={songInfo.artist_tracks}
                />
                <div className="desc-padding">
                  <SongsDesc desc={songInfo.description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
