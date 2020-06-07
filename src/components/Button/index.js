import React from 'react';
import { number, node, func } from 'prop-types';

const Button = ({
  width, height, children, onClick,
}) => (
  <div>
     <button
      style={{
        width,
        height,
      }}
      onClick={onClick}
     >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  width: number,
  height: number,
  children: node,
  onClick: func,
};

export default Button;
