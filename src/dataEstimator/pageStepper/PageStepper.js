import React, { useState, useEffect } from 'react';
import './pageStepper.css';
import DataEstimatorSlider from '../slider/DataEstimatorSlider';

//Stepper Component Parts
const Step = ({ indicator, children }) => <div className='stepper_step'>{children}</div>;
const Stepper = (props) => {
  const { children, activeStep } = props;

  return <div>{children[activeStep]}</div>;
};

//Page Stepper Main Component
const PageStepper = ({ lists, optionsCallback }) => {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = React.useState(0);
  const listItems = lists ? lists : [];

  const handlePrevStep = () => {
    if (active > 0) setActive(active - 1);
  };
  const handleNextStep = () => {
    if (active !== listItems.length - 1) setActive((prevActive) => prevActive + 1);
  };
  return (
    <div className='stepper'>
      <h3 className='categories-chevron' onClick={optionsCallback}>
        &lt; View Categories
      </h3>
      <Stepper activeStep={active}>
        {listItems.map((list, index) => {
          const { serial_number, question, details, slider } = list;
          const { value, options } = slider;

          return (
            <Step key={index}>
              <div className='stepper_content'>
                <h2>
                  {serial_number}&nbsp;
                  {question}
                </h2>

                <p>{details}</p>
              </div>
              <DataEstimatorSlider options={options} value={value} />
              <div className='stepper_buttons'>
                {active !== 0 ? <button onClick={handlePrevStep}>Prev</button> : null}
                <button onClick={handleNextStep}>{active !== listItems.length - 1 ? 'Next' : 'Continue'}</button>
              </div>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default PageStepper;
