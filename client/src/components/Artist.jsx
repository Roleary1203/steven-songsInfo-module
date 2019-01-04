import React from 'react';
import styled from 'styled-components';

const Following = styled.button`
  background-color: #fff;
  border-color: #fff;
  color: #f50;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
`;

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
          <div>
            {this.state.followBtnOff ? (
              <button className="follow" onClick={this.followClick}>
                Follow
              </button>
            ) : (
              <Following onClick={this.followingClick}>Following</Following>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Artist;
