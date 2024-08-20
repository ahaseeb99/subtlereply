import React from "react";
import styled, { keyframes } from "styled-components";

const Preloader = () => {
  return (
    <PreloaderContainer>
      <PreloaderCircle />
      <PreloaderCircle />
      <PreloaderCircle />
    </PreloaderContainer>
  );
};

const spin = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PreloaderCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #6b46c1; /* Match your website color */
  margin: 0 5px;
  animation: ${spin} 1s infinite;
`;

export default Preloader;
