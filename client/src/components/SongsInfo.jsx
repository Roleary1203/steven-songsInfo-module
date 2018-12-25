import React from 'react';

class SongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>these are buttons</h1>
        {this.props.plays} {this.props.likes} {this.props.reposts}
      </div>
    );
  }
}
export default SongsInfo;
