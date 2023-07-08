import React from 'react';

const Button = ({ onClick, isDescending }) => {
  const buttonTitle = isDescending ? 'Change to Ascending Order' : 'Change to Descending Order';

  return (
    <button onClick={onClick}>{buttonTitle}</button>
  );
};

export default Button;