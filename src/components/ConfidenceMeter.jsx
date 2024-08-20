import React, { useState } from "react";

const ConfidenceMeter = () => {
  const [circlePosition, setCirclePosition] = useState(42); 
  const [confidenceValue, setConfidenceValue] = useState(1); 

  const handleCircleMove = (event) => {
    const svgRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - svgRect.left;
    const newPosition = Math.max(42, Math.min(420, mouseX)); 
    setCirclePosition(newPosition);
    const newValue = Math.round(((newPosition - 42) / (420 - 42)) * 4) + 1; 
    setConfidenceValue(newValue);
  };

  const barWidth = circlePosition;
  const circleRadius = 28; 

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="434"
      height="56"
      fill="none"
      viewBox="0 0 434 56"
      onMouseMove={handleCircleMove}
      onMouseUp={handleCircleMove}
    >
      <rect width={barWidth} height="30" x="14" y="14" fill="url(#paint0_linear_461_4211)" rx="10" /> {/* Colored bar */}
      <rect width={420 - barWidth} height="30" x={barWidth + 14} y="14" fill="#fff" rx="10" /> {/* Right white rectangle */}
      <circle
        cx={Math.min(circlePosition + circleRadius, 434 - circleRadius)} // Ajuster la position du cercle
        cy="28"
        r={circleRadius}
        fill="url(#paint1_linear_461_4211)"
        style={{ cursor: "pointer" }}
      />
      <circle cx={Math.min(circlePosition + circleRadius, 434 - circleRadius)} cy="28" r={circleRadius - 13.333} fill="#fff" />
      <text x="10" y="30" fontSize="16" fontWeight="bold">
        {confidenceValue}
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_461_4211"
          x1="14"
          x2={circlePosition}
          y1="29"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#AA55F4" />
          <stop offset="1" stopColor="#E9489C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_461_4211"
          x1="335"
          x2="391"
          y1="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA55F4" />
          <stop offset="1" stopColor="#E9489C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ConfidenceMeter;