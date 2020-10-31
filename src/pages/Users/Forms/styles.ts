import styled from 'styled-components';
import {
  TextField as MUITextField,
  InputAdornment as MUIInputAdornment,
  Button as MUIButton,
} from '@material-ui/core';

export const Input = styled(MUITextField)`
  && {
    width: 548px;

    .MuiOutlinedInput-root {
      background: #f5f8fa;
      color: #005288;
      border-radius: 10px;
    }

    margin-bottom: 24px;

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      box-sizing: border-box;
      border-radius: 10px;
      border-color: #005288;
    }
  }
`;

export const InputAdornment = styled(MUIInputAdornment)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled(MUIButton)`
  && {
    width: 548px;
    height: 64px;

    margin-top: 12px;
    border-radius: 10px;
    background: #005288;

    .MuiButton-label {
      font-weight: bold;
      font-size: 18px;
      color: #fff;
    }

    transition: background 0.2s;
    :hover {
      background-color: #4d6f80;
    }

    :after {
      content: '';
      background: #005288;
      display: block;
      position: absolute;

      border-radius: 10px;

      opacity: 0;
      transition: all 0.5s;
    }

    :active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s;
    }
  }
`;
