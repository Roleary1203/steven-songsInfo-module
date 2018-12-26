import React from 'react';

class SongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtnOff: true,
      repostBtnOff: true,
      shareBtnOff: true,
      moreBtnOff: true
    };
    this.likeClick = this.likeClick.bind(this);
    this.repostClick = this.repostClick.bind(this);
    this.shareClick = this.shareClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
  }

  likeClick() {
    this.setState(prevState => ({
      likeBtnOff: !prevState.likeBtnOff
    }));
  }

  repostClick() {
    this.setState(prevState => ({
      repostBtnOff: !prevState.repostBtnOff
    }));
  }

  shareClick() {
    this.setState(prevState => ({
      shareBtnOff: !prevState.shareBtnOff
    }));
  }

  moreClick() {
    this.setState(prevState => ({
      moreBtnOff: !prevState.moreBtnOff
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.likeClick}>
          {this.state.likeBtnOff ? 'like' : 'liked'}
        </button>
        <button onClick={this.repostClick}>
          {this.state.repostBtnOff ? 'repost' : 'reposted'}
        </button>
        <button onClick={this.shareClick}>
          {this.state.shareBtnOff ? 'share' : 'shared'}
        </button>
        <button onClick={this.moreClick}>
          {this.state.moreBtnOff ? 'more' : 'less'}
        </button>
        <div>{this.props.plays}</div>
        <div>{this.props.likes}</div>
        <div>{this.props.reposts}</div>
      </div>
    );
  }
}
export default SongsInfo;
