import React from 'react';
import SharePopup from './SharePopup.jsx';

class SongsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtnOff: true,
      likes: this.props.likes,
      repostBtnOff: true,
      sharePopupOff: true,
      moreBtnOff: true
    };

    console.log(this.state.likes);
    console.log(this.state.likes + 1);
    this.likeClick = this.likeClick.bind(this);
    this.likeIncrement = this.likeIncrement.bind(this);
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

  likeIncrement() {
    this.setState({
      likes: this.state.likes + 1
    });
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
        <button className="actions" onClick={this.likeClick}>
          {this.state.likeBtnOff ? 'Like' : 'Liked'}
        </button>
        <button className="actions" onClick={this.repostClick}>
          {this.state.repostBtnOff ? 'Repost' : 'Reposted'}
        </button>
        <button className="actions" onClick={this.toggleShare}>
          {this.state.sharePopupOff ? (
            'Share'
          ) : (
            <SharePopup text="Share" closePopup={this.toggleShare.bind(this)} />
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
        <div className="metrics">play icon {this.props.plays}</div>
        <div className="metrics">likes icon {this.props.likes}</div>
        <div className="metrics">reposts icon {this.props.reposts}</div>
      </div>
    );
  }
}

export default SongsInfo;
