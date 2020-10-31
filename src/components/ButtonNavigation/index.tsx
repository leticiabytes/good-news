import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  url: string;
  color: string;
  width: string;
  height: string;
}

const ButtonNavigation: React.FC<ButtonProps> = ({
  children,
  url,
  color,
  width,
  height,
}) => {
  return (
    <Button to={url} color={color} width={width} height={height}>
      {children}
    </Button>
  );
};

export default ButtonNavigation;
