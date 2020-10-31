import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  color: string;
  width: string;
  height: string;
}

export const Button = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
  border-radius: 10px;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}

  ${props =>
    props.color !== '#ffffff' &&
    css`
      color: #ffffff;
    `}

  transition: background 0.2s;
  :hover {
    background-color: #4d6f80;
  }

  :after {
    content: '';
    background: #005288;
    display: block;
    position: absolute;

    ${props =>
      props.height &&
      css`
        padding-top: ${props.height};
        padding-left: ${props.height};
      `}

    border-radius: 20px;

    opacity: 0;
    transition: all 0.5s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  outline: none;
  text-decoration: none;
  cursor: pointer;
`;
