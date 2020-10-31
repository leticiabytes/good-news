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

export const Container = styled.div`
  padding: 30px 0;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin: 74px 0;

    width: 100vw;
    max-width: 1276px;

    div {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        color: #005288;
        text-decoration: none;

        transition: background 0.2s;

        :hover {
          color: #4d6f80;
        }
      }
    }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h2 {
      font-weight: bold;
      font-size: 32px;
      line-height: 54px;

      color: #005288;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;

      color: #4d6f80;
    }

    hr {
      width: 100%;
      margin: 36px 0;
      border-top: 1px solid #d3e2e5;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .inputLabel {
      display: flex;
      margin-bottom: 8px;
      line-height: 24px;
      font-size: 22px;
      color: #8fa7b2;
    }
  }

  span {
    display: flex;
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 14px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;

    color: #8fa7b2;
    text-decoration: none;

    b {
      color: #005288;
    }
  }
`;

export const Footer = styled.div`
  z-index: -1;
  background: #005288;

  padding: 0 30px 80px 0;
  height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > small {
    margin-top: 82px;
    color: #edf2f6;
    font-weight: 400;
  }
`;
