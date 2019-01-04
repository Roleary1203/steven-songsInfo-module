import React from 'react';

const styles = {
  follow: { backgroundColor: '#f50', borderColor: '#f50', color: '#fff' },
  following: { backgroundColor: '#fff', borderColor: '#fff', color: '#f50' }
};

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followBtnOff: true,
      follows: this.props.artFol
    };
    this.followClick = this.followClick.bind(this);
    this.followingClick = this.followingClick.bind(this);
  }

  followClick() {
    this.setState(prevState => ({
      followBtnOff: !prevState.followBtnOff,
      follows: this.state.follows + 1
    }));
  }

  followingClick() {
    this.setState(prevState => ({
      followBtnOff: !prevState.followBtnOff,
      follows: this.state.follows - 1
    }));
  }

  render() {
    return (
      <div className="desc-artist-container">
        <div className="desc-artist-flex">
          <div className="artist">{this.props.artist}</div>
          <div className="artist-info">F {this.state.follows}</div>
          <div className="artist-info">T {this.props.artTra}</div>
          <button className="follow">
            {this.state.followBtnOff ? (
              <span onClick={this.followClick} style={styles.follow}>
                Follow
              </span>
            ) : (
              <span onClick={this.followingClick} style={styles.following}>
                Following
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }
}
export default Artist;
