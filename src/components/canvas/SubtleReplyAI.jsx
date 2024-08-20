import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import styled from "styled-components";
import redditLogo from "../../components/reddit.svg";
import { logo } from "../../assets";
import RedditPostPreview from "../../components/RedditPostPreview";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const StyledBubble = styled.div`
background-color: #ffffff;
color: #333;
padding: 8px 12px; // Reduced padding
border-radius: 16px;
border: 1px solid #ccc;
width: 500px; // Reduced width
max-width: 500px;
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
margin: 10px;
font-family: Arial, sans-serif;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
z-index: 999;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    margin-top: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent #ffffff transparent transparent;
  }

  .content {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }

  .author-and-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }

  .author {
    font-size: 12px;
    color: #555;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .reddit-logo {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  .timestamp {
    font-size: 12px;
    color: #555;
  }
`;

const SubtleReplyAI = ({ isMobile, rotationY, showBubble }) => {
  const aiModel = useGLTF("./robot_ai/scene.gltf");
  const scaleFactor = isMobile ? 1.0 : 3.5;

  return (
    <mesh rotation-y={rotationY}>
      <hemisphereLight intensity={0.15} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={aiModel.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
        position={isMobile ? [0, -2.5, -2.2] : [1, -6, -2]}
        rotation={[-0.05, -0.2, -0.05]}
      />
      {showBubble && (
        <Html
          position={[
            isMobile ? -0.5 : -1,
            isMobile ? -1.5 : -0.88,
            isMobile ? -0.5 : -0.3,
          ]}
          rotation-y={-rotationY}
        >
          <StyledBubble>
            <div className="content">
              <img src={redditLogo} alt="Reddit Logo" className="reddit-logo" />
              Have you tried using Subtle Reply AI to get the word out?
            </div>
            <div className="author-and-time">
              <div className="author">
                <img src={logo} alt="Suble Reply Logo" className="reddit-logo" />
                Subtle Reply AI
              </div>
              <span className="timestamp">6 min ago</span>
            </div>
          </StyledBubble>
        </Html>
      )}
    </mesh>
  );
};

const SubtleReplyAICanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [scrollDetected, setScrollDetected] = useState(false);
  const targetRotationY = -Math.PI;

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let scrollLocked = false;

    const handleScroll = (event) => {
      if (!scrollDetected) {
        setScrollDetected(true);
        scrollLocked = true;
        event.preventDefault();
      }
    };

    const rotateRobot = () => {
      if (scrollDetected && rotationY > targetRotationY) {
        setRotationY((prevRotationY) => prevRotationY - 0.0005);
        animationFrameId = requestAnimationFrame(rotateRobot);
      } else if (rotationY <= targetRotationY) {
        setShowBubble(true);
        scrollLocked = false;
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    if (scrollDetected) rotateRobot();

    return () => {
      window.removeEventListener("wheel", handleScroll);
      cancelAnimationFrame(animationFrameId);
      if (!scrollLocked) {
        document.body.style.overflow = "auto";
      }
    };
  }, [scrollDetected, rotationY, targetRotationY]);

  return (
    <ContentContainer>
      {" "}
      <div style={{ marginTop: "250px" }}>
        <RedditPostPreview />
      </div>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="mt-50"
        style={{ position: "absolute", top: "150px", zIndex: 1 }} 

      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            maxDistance={7}
            minDistance={7}
          />
          <SubtleReplyAI
            isMobile={isMobile}
            rotationY={rotationY}
            showBubble={showBubble}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </ContentContainer>
  );
};

export default SubtleReplyAICanvas;
