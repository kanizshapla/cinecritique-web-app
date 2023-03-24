import React from 'react';

function Button(props) {
  const { text, onClick } = props;
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
