import styled from 'styled-components';
import {
  TextField as MUITextField,
  InputAdornment as MUIInputAdornment,
  Button as MUIButton,
} from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  background: #f7f9fc;

  header {
    width: 100%;
    color: #4d6f80;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;

    h2 {
      font-weight: bold;
      font-size: 32px;
      line-height: 54px;
    }

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export const Box = styled.div`
  flex: 1;
  min-width: 1100px;
  max-width: 1100px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

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

    .textarea {
      height: 300px;
    }
  }
`;

export const Image = styled.div`
  margin-bottom: 40px;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
`;

export const Input = styled(MUITextField)`
  && {
    width: 100%;

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
    width: 100%;
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
