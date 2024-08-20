import React, { useState, useRef } from "react";

const StatisticsCard = () => {
  const colors = ["#aaccff", "#4FCD8D", "#FFD700", "#D1C4E9"];
  const [data, setData] = useState([
    {
      id: "activeProjects",
      name: "Active Projects",
      value: 1234,
      checked: false,
      color: colors[0],
    },
    {
      id: "communitiesTargeted",
      name: "Communities Targeted",
      value: 2348,
      checked: false,
      color: colors[1],
    },
    {
      id: "keywordsUsed",
      name: "Keywords Used",
      value: 2367,
      checked: false,
      color: colors[2],
    },
    {
      id: "repliesGenerated",
      name: "Replies Generated",
      value: 1346,
      checked: false,
      color: colors[3],
    },
  ]);
  const [hovered, setHovered] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleCheckboxChange = (index) => {
    const newData = data.map((item, idx) => {
      if (idx === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setData(newData);
  };

  const handleMouseOver = (event, name) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
      setHovered(name);
    }
  };

  const handleMouseOut = () => {
    setHovered("");
  };

  return (
    <div ref={cardRef} className="bg-custom p-4 md:p-6 rounded-2xl w-full shadow-lg space-y-4 md:space-y-0 md:space-x-6 md:flex md:items-start relative">
      <div className="w-full space-y-4">
        <h2 className="text-xl font-bold mb-4 text-white">Statistic of the week</h2>
        <div className="rounded-lg bg-dark-600 p-4">
          {data.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between mb-2">
              <label className="flex items-center text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mr-2"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)}
                  style={{ accentColor: item.color }}
                />
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <SVGBarGraph data={data.filter((item) => item.checked)} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
      </div>
      {hovered && (
        <div className="tooltip" style={{
          position: 'absolute',
          left: `${tooltipPos.x}px`,
          top: `${tooltipPos.y - 30}px`,
          padding: '8px',
          background: 'rgba(0,0,0,0.75)',
          color: 'white',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          transform: 'translateX(-50%)',
          pointerEvents: 'none'
        }}>
          {hovered}
        </div>
      )}
    </div>
  );
};

const SVGBarGraph = ({ data, handleMouseOver, handleMouseOut }) => {
  const maxHeight = 250; 
  const maxWidth = 500;
  const barWidth = 40;
  const gap = 30;
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  const totalWidth = (barWidth + gap) * data.length - gap;

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${maxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      width="500"
      height="350" 
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "15px",
        overflow: "visible",
      }}
      className="border-2 border-gray-300"
    >
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * maxHeight;
        const x = (barWidth + gap) * index;

        return (
          <g
            key={item.id}
            transform={`translate(${x}, ${maxHeight - barHeight + 10})`}
            onMouseOver={(e) => handleMouseOver(e, item.name)}
            onMouseOut={handleMouseOut}
          >
            <rect
              width={barWidth}
              height={barHeight}
              style={{ fill: item.color }}
            />
            <text
              x={barWidth / 2}
              y="-5"
              fill="#000"
              textAnchor="middle"
              fontSize="14"
            >
              {item.value.toLocaleString()}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default StatisticsCard;
