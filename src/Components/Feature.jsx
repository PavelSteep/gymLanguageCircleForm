import React from 'react';

function Feature(props) {
  return (
    <div className="feature-block">
      <div className="feature-img">
        <img src={ props.img } alt={ props.title } />
      </div>
      <p className="feature-text">
        { props.title }
      </p>
    </div>
  );
}

export default Feature;