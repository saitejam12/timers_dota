import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';

const { Handle } = Slider;
const marksTime = {
  0: 0,
  12: 12,
  24: 24,
};
const marksSocial = {
  0: 'None',
  0.5: 'Occasionally',
  1.0: 'Frequently',
  1.5: 'Constantly',
};
const handle = (props) => {
  const { value, index, dragging, ...restProps } = props;
  return (
    <Tooltip overlay={value} visible placement='bottom' key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const DataEstimatorSlider = ({ value, options, handleChange }) => {
  const sliderchange = (x) => {
    let val = parseFloat(x.toFixed(options.precision));

    handleChange(val);
  };

  return (
    <div>
      <Slider
        className='stepper_slider'
        value={value}
        min={options.floor}
        max={options.ceil}
        step={options.step}
        // handle={handle}
        marks={options.ceil === 24 ? marksTime : marksSocial}
        onChange={(x) => {
          sliderchange(x);
        }}
      />
    </div>
  );
};

export default DataEstimatorSlider;
