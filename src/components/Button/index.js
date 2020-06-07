import React from 'react';
import { string, node } from 'prop-types';

const Button = ({
  width, height, children,
}) => (
  <div>
     <button style={{
       width,
       height,
     }}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  width: string,
  height: string,
  children: node,
};

export default Button;
