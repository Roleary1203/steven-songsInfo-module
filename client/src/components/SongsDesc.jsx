import React from 'react';

const SongsDesc = props => {
  return (
    <div className="desc-artist-container">
      <div className="desc-flex">
        <div className="desc"><em>Album release date:</em>{props.date}</div>
      </div>
    </div>
  );
};

export default SongsDesc;
