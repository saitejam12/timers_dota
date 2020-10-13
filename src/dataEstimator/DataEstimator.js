import React, { useState, useEffect } from 'react';

import PageStepper from './pageStepper/PageStepper';

import * as vm from '../dataEstimator.json';
const { activityTypes } = vm.default;

const Options = ({ typeId, title, isSelected, alias, callback }) => (
  <div className='options' onClick={() => callback(alias)}>
    {console.log(isSelected)}
    <span className={isSelected ? 'checkbox' : 'outline'}>{typeId}</span>
    <span>{title}</span>
  </div>
);

const Activities = ({ callback }) => {
  return (
    <div className='estimator'>
      <div className='description'>
        <div>
          <h2>Estimate your Data </h2>
          <h6>Answer some simple questions about your household's internet activities to get a Plan Recommendation</h6>
          <span>
            <u>How We Estimate?</u>
            <br />
            <u>What is Data?</u>
          </span>
        </div>
        <div>
          <p>*Remember to account for your entire household's Data Usage</p>
        </div>
      </div>
      <div className='action-items'>
        <div />
        <div className='estimator-activities'>
          {activityTypes.map((activity) => {
            const { typeId, title, isSelected, alias } = activity;
            return (
              <Options
                key={typeId}
                typeId={typeId}
                title={title}
                isSelected={isSelected}
                callback={callback}
                alias={alias}
              />
            );
          })}
        </div>
        <div className='total-data'>
          Est <b>125GB</b> Mo
        </div>
      </div>
    </div>
  );
};

const DataEstimator = () => {
  const [options, setOptions] = useState(true);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleCallback = (name) => {
    const comp = vm.default[name];

    setActiveComponent(comp);
  };

  const handleOptionsPath = () => {
    setOptions(true);
    setActiveComponent(null);
  };
  useEffect(() => {
    if (activeComponent !== null) setOptions(false);
  }, [activeComponent]);
  return (
    <>
      {options ? (
        <Activities callback={handleCallback} />
      ) : (
        <PageStepper lists={activeComponent} optionsCallback={handleOptionsPath} />
      )}
    </>
  );
};

export default DataEstimator;
//
