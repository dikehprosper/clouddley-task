


import React, { useState, useEffect } from "react";
import Segment1 from "@/assets/svgs/Segment1";
import Segment2 from "@/assets/svgs/Segment2";
import Segment3 from "@/assets/svgs/Segment3";
import Segment4 from "@/assets/svgs/Segment4";
import Segment5 from "@/assets/svgs/Segment5";
import Segment6 from "@/assets/svgs/Segment6";
import Segment7 from "@/assets/svgs/Segment7";
import Segment8 from "@/assets/svgs/Segment8";
import Segment9 from "@/assets/svgs/Segment9";
import Segment10 from "@/assets/svgs/Segment10";
import Segment11 from "@/assets/svgs/Segment11";
import Segment12 from "@/assets/svgs/Segment12";
import Segment13 from "@/assets/svgs/Segment13";
import Segment14 from "@/assets/svgs/Segment14";
import Segment15 from "@/assets/svgs/Segment15";
import Segment16 from "@/assets/svgs/Segment16";
import Segment17 from "@/assets/svgs/Segment17";
import Segment18 from "@/assets/svgs/Segment18";
import Segment19 from "@/assets/svgs/Segment19";
import Segment20 from "@/assets/svgs/Segment20";

const segments = [
  Segment1, Segment2, Segment3, Segment4, Segment5,
  Segment6, Segment7, Segment8, Segment9, Segment10,
  Segment11, Segment12, Segment13, Segment14, Segment15,
  Segment16, Segment17, Segment18, Segment19, Segment20
];

const SequentialLoader = ({ interval = 200, size = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % segments.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);

  const ActiveSegment = segments[activeIndex];

  return (
    <div style={{ width: size, height: size }}>
      <ActiveSegment />
    </div>
  );
};

const CircularLoaderDemo = () => (
  <div>
    <SequentialLoader interval={50} />
  </div>
);

export default CircularLoaderDemo;