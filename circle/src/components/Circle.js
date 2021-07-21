import React from 'react';
import './Circle.scss';

const Circle = () => {
  const spanNum = [];
  for (let i = 0; i < 15; i++) {
    spanNum.push(i);
  }
  const spans = spanNum.map((span) => <span key={span}></span>);
  return <div className="loader">{spans}</div>;
};

export default Circle;
