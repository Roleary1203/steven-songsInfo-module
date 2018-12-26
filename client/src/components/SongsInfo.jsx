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
    this.showMore = this.showMore.bind(this);
    this.closeMore = this.closeMore.bind(this);
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

  showMore() {
    event.preventDefault();
    this.setState({ moreBtnOff: false }, () => {
      document.addEventListener('click', this.closeMore);
    });
  }

  closeMore() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ moreBtnOff: true }, () => {
        document.removeEventListener('click', this.closeMore);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.likeClick}>
          {this.state.likeBtnOff ? 'Like' : 'Liked'}
        </button>
        <button onClick={this.repostClick}>
          {this.state.repostBtnOff ? 'Repost' : 'Reposted'}
        </button>
        <button onClick={this.shareClick}>
          {this.state.shareBtnOff ? 'Share' : 'Shared'}
        </button>
        <button onClick={this.showMore}>
          {this.state.moreBtnOff ? (
            'More'
          ) : (
            <div
              className="more-menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <button>Add to Next Up</button>
              <button>Add to Playlist</button>
              <button>Station</button>
            </div>
          )}
        </button>
        <div>{this.props.plays}</div>
        <div>{this.props.likes}</div>
        <div>{this.props.reposts}</div>
      </div>
    );
  }
}
export default SongsInfo;
