import React from 'react';
import SharePopup from './SharePopup.jsx';

class SongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtnOff: true,
      repostBtnOff: true,
      sharePopupOff: true,
      moreBtnOff: true
    };
    this.likeClick = this.likeClick.bind(this);
    this.repostClick = this.repostClick.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
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

  toggleShare() {
    this.setState(prevState => ({
      sharePopupOff: !prevState.sharePopupOff
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
        <button onClick={this.toggleShare}>
          {this.state.sharePopupOff ? (
            'Share'
          ) : (
            <SharePopup text="Share" closePopup={this.toggleShare.bind(this)} />
          )}
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
        <div>play icon {this.props.plays}</div>
        <div>likes icon {this.props.likes}</div>
        <div>reposts icon {this.props.reposts}</div>
      </div>
    );
  }
}

export default SongsInfo;
