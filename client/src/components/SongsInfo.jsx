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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      likeBtnOff: !prevState.likeBtnOff,
      repostBtnOff: !prevState.repostBtnOff,
      shareBtnOff: !prevState.shareBtnOff,
      moreBtnOff: !prevState.moreBtnOff
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.likeBtnOff ? 'like' : 'liked'}
        </button>
        <button onClick={this.handleClick}>
          {this.state.repostBtnOff ? 'repost' : 'reposted'}
        </button>
        <button onClick={this.handleClick}>
          {this.state.shareBtnOff ? 'share' : 'shared'}
        </button>
        <button onClick={this.handleClick}>
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
