import React, { useRef } from 'react';
import styled from 'styled-components';
import './slider.css';

const Thumb = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  top: -8px;
  opacity: 0.9;
  background: red;
  cursor: pointer;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Slider = styled.div`
  position: relative;
  border-radius: 5px;
  background: #233342;
  height: 15px;
  margin: 1em;
`;

const SliderCustom = ({ min, max, onChange, step }) => {
  const sliderRef = useRef();
  const thumbRef = useRef();
  const diff = useRef();

  const getPercentage = (current, max) => (100 * current) / max;
  const getLeft = (percentage) => `calc(${percentage}% - 15px)`;
  const getValue = (percentage, max) => ((max / 100) * percentage).toFixed(step * 2);
  const getWidth = (min, max) => `calc(${max - min}*5px)`;
  const initialPercentage = getPercentage(min, max);

  //handle mouse move event
  const handleMouseMove = (event, axis) => {
    // if (axis === 'X') {
    // }
    // if (axis === 'Y') {
    //   let newY = event.clientY - diff.current - sliderRef.current.getBoundingClientRect().bottom;
    // }
    let newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
    const start = 0;

    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }

    const newPercentage = getPercentage(newX, end);
    const newValue = getValue(newPercentage, max);
    thumbRef.current.style.left = getLeft(newPercentage);
    onChange(newValue);
  };

  //handle mouse up event
  const handleMouseRelease = () => {
    document.removeEventListener('mouseup', handleMouseRelease);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  //handle mouse down event
  const handleMousePress = (event) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseRelease);
    document.addEventListener('mouseClick', handleMouseRelease);
    diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left;
  };

  return (
    <div className='slider'>
      <SliderHeader>
        <strong>{min}</strong>
      </SliderHeader>

      <Slider ref={sliderRef} onMouseDown={handleMousePress} style={{ width: getWidth(min, max) }}>
        <Thumb ref={thumbRef} onMouseDown={handleMousePress} style={{ left: getLeft(initialPercentage) }} />
      </Slider>
      <SliderHeader>
        <strong>{max}</strong>
      </SliderHeader>
    </div>
  );
};

export default SliderCustom;
