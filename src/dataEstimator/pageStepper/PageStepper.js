import React, { useState, useEffect, useContext } from 'react';
import './pageStepper.css';
import DataEstimatorSlider from '../shared/DataEstimatorSlider';
import DataEstimatorButtons from '../shared/DataEstimatorButtons';
import DataAmount from '../shared/DataAmount';
import { EstimatorContext } from '../../context';

//Stepper Component Parts
const Step = ({ list, id, updateHandler }) => {
  const { serial_number, question, details, slider, per_hour } = list;
  const handleChange = (value) => {
    updateHandler(id, list, value, per_hour);
  };

  return (
    <div className='stepper_step'>
      <div className='stepper_content'>
        <h2>
          {serial_number}&nbsp;
          {question}
        </h2>
        <p>{details}</p>
      </div>

      {slider ? (
        <DataEstimatorSlider options={slider.options} value={slider.value} handleChange={handleChange} />
      ) : (
        <DataEstimatorButtons value={list.total} handleChange={handleChange} />
      )}
    </div>
  );
};

const Stepper = ({ children, activeStep }) => {
  return <div>{children[activeStep]}</div>;
};

//Page Stepper Main Component
const PageStepper = ({ lists, optionsCallback, reset }) => {
  const context = useContext(EstimatorContext);

  const [active, setActive] = useState(0);

  const [stepData, setStepData] = useState(0);
  const [listItems, setListItems] = useState(context.state[lists]);

  const handlePrevStep = () => {
    if (active > 0) setActive((prevActive) => prevActive - 1);
  };
  const handleNextStep = () => {
    if (active === listItems.length - 1) {
      optionsCallback();
    } else setActive((prevActive) => prevActive + 1);
  };
  const handleUpdate = (index, item, val, per_hour) => {
    let newItem = { ...item };
    let arr = [...listItems];

    if (newItem.slider) {
      newItem.slider.value = val;
    } else {
      newItem.value = val;
    }

    newItem.total = val * per_hour;
    arr[index] = newItem;

    setListItems(arr);
  };

  useEffect(() => {
    context.updateValues(lists, listItems);
  }, [listItems]);

  return (
    <div className='stepper'>
      <h3 className='categories-chevron' onClick={optionsCallback}>
        &lt; View Categories
      </h3>
      <Stepper activeStep={active}>
        {listItems.map((list, index) => {
          return (
            <div key={index}>
              <Step key={index} id={index} list={list} updateHandler={handleUpdate} />
              <div className='stepper_buttons'>
                {active !== 0 ? (
                  <div className='stepper_button_styling' onClick={handlePrevStep}>
                    Previous
                  </div>
                ) : null}
                <DataAmount dataAmount={stepData} />
                <div className='stepper_button_styling' onClick={handleNextStep}>
                  {active !== listItems.length - 1 ? 'Next' : 'Continue'}
                </div>
              </div>
            </div>
          );
        })}
      </Stepper>
    </div>
  );
};

export default PageStepper;
