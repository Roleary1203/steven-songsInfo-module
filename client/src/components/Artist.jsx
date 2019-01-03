import React from 'react';

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followBtnOff: true
    };
    this.followClick = this.followClick.bind(this);
  }

  followClick() {
    this.setState(prevState => ({
      followBtnOff: !prevState.followBtnOff
    }));
  }

  render() {
    return (
      <div className="desc-artist-container">
        <div className="desc-artist-flex">
          <div className="artist">{this.props.artist}</div>
          <div className="artist-info">followers icon {this.props.artFol}</div>
          <div className="artist-info">tracks icon {this.props.artTra}</div>
          <button className="follow" onClick={this.followClick}>
            {this.state.followBtnOff ? 'Follow' : 'Following'}
          </button>
        </div>
      </div>
    );
  }
}
export default Artist;
