import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  //   padding: 30px 0;

  header {
    width: 100vw;
    max-width: 1276px;

    margin: 74px auto;
    padding: 0 0 160px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > main {
      max-width: 840px;
    }
    > main p {
      font-style: normal;
      font-weight: 400;
      margin-top: 48px;
      font-size: 18px;
      line-height: 34px;
    }
  }
`;

export const CarouselContainer = styled.div`
  .image-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 4px;
    padding: 20px 0 20px 20px;
  }

  width: 100%;
  margin-top: -140px;
`;

export const Card = styled.div`
  z-index: 1000;

  width: 385px;
  height: 380px;

  background: #ffffff;
  border: 4px solid #005288;
  border-radius: 10px;

  .center-cropped {
    width: 377px;
    height: 180px;
    overflow: hidden;
  }

  .center-cropped img {
    pointer-events: none;
    user-select: none;

    min-width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;

    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }

  section.body {
    padding: 20px;

    > p {
      color: #8fa7b2;
      font-weight: 600;
      font-size: 18px;

      height: 18px;
      max-width: 175px;
    }

    > h2 {
      height: 20px;
      max-width: 350px;
      max-height: 72px;
      word-wrap: break-word;

      margin-top: 8px;
      color: #005288;

      font-weight: 700;
      font-size: 20px;
    }

    > footer {
      margin-top: 12px;
      padding-top: 40px;
      display: flex;
      justify-content: flex-end;
      align-content: flex-end;
    }
  }
`;

const SSkeletonPulse = styled.div`
  display: inline-block;
  border-radius: 20px;

  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #e2dede 0%, #f0f0f0 50%, #e2dede 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: '\00a0';
  }
`;

export const Footer = styled.div`
  z-index: -1;
  background: #005288;

  padding: 0 30px 80px 0;
  /* position: absolute;
  bottom: 0; */

  height: 430px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > small {
    margin-top: 32px;
    color: #edf2f6;
    font-weight: 400;
  }
`;
