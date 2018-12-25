import React from 'react';
import SongsInfo from './SongsInfo.jsx';
import SongsDesc from './SongsDesc.jsx';
import Artist from './Artist.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <input type="type" />
          <input type="submit" />
          <SongsInfo />
          <SongsDesc />
          <Artist />
        </div>
      </div>
    );
  }
}
export default App;
