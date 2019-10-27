import styled from "styled-components";

export const WishScreen = styled.div`
  position: relative;
  margin: 0;
  padding: 0;

  img {
    width: 100vw;
    height: 100vh;
  }
`;

export const HomeScreen = styled.div`
  img {
    width: 100vw;
    height: 100vh;
  }
`;

export const WishText = styled.div`
  position: absolute;
  z-index: 9;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
