import React from 'react';
import SharePopup from './SharePopup.jsx';

class SongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtnOff: true,
      likes: this.props.likes,
      repostBtnOff: true,
      reposts: this.props.reposts,
      sharePopupOff: true,
      moreBtnOff: true
    };

    console.log(this.props.likes);
    console.log(this.props.reposts);
    console.log(this.props.reposts + 1);
    this.likeClick = this.likeClick.bind(this);
    this.likedClick = this.likedClick.bind(this);
    this.repostClick = this.repostClick.bind(this);
    this.repostedClick = this.repostedClick.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
    this.showMore = this.showMore.bind(this);
    this.closeMore = this.closeMore.bind(this);
  }

  likeClick() {
    this.setState(prevState => ({
      likeBtnOff: !prevState.likeBtnOff,
      likes: this.state.likes + 1
    }));
  }

  likedClick() {
    this.setState(prevState => ({
      likeBtnOff: !prevState.likeBtnOff,
      likes: this.state.likes - 1
    }));
  }

  repostClick() {
    this.setState(prevState => ({
      repostBtnOff: !prevState.repostBtnOff,
      reposts: this.state.reposts + 1
    }));
  }

  repostedClick() {
    this.setState(prevState => ({
      repostBtnOff: !prevState.repostBtnOff,
      reposts: this.state.reposts - 1
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
      <div className="songsinfo-container">
        <div className="songsinfos-flex">
          <button className="actions">
            {this.state.likeBtnOff ? (
              <span onClick={this.likeClick}>Like</span>
            ) : (
              <span onClick={this.likedClick}>Liked</span>
            )}
          </button>
          <button className="actions">
            {this.state.repostBtnOff ? (
              <span onClick={this.repostClick}>Repost</span>
            ) : (
              <span onClick={this.repostedClick}>Reposted</span>
            )}
          </button>
          <button className="actions" onClick={this.toggleShare}>
            {this.state.sharePopupOff ? (
              'Share'
            ) : (
              <SharePopup
                text="Share"
                closePopup={this.toggleShare.bind(this)}
              />
            )}
          </button>
          <button className="actions" onClick={this.showMore}>
            {this.state.moreBtnOff ? (
              'More'
            ) : (
              <div
                className="more-menu"
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <button className="more-actions">Add to Next Up</button>
                <button className="more-actions">Add to Playlist</button>
                <button className="more-actions">Station</button>
              </div>
            )}
          </button>
        </div>
        <div className="songsinfos-flex">
          <div className="metrics">play icon {this.props.plays}</div>
          <div className="metrics">likes icon {this.state.likes}</div>
          <div className="metrics">reposts icon {this.state.reposts}</div>
        </div>
      </div>
    );
  }
}

export default SongsInfo;
