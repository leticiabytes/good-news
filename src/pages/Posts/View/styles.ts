import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #f7f9fc;
`;

export const Box = styled.div`
  flex: 1;
  min-width: 1100px;
  max-width: 1100px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;

  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  header {
    width: 100%;
    color: #005288;

    margin-bottom: 40px;
    padding: 10px 60px;

    .subHeader {
      display: flex;
      justify-content: space-between;

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
        color: #4d6f80;
      }
    }
  }
  main {
    margin-bottom: 40px;
    padding: 24px 60px;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;

      color: #4d6f80;
    }
  }
`;
