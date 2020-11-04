import React, { useState, useEffect, useContext } from 'react';

import PageStepper from './pageStepper/PageStepper';
import DataAmount from './shared/DataAmount';
import PlanRecommendation from './PlanRecommendation';

import { EstimatorContext } from '../context';

const Options = ({ typeId, title, isSelected, alias, callback }) => (
  <div className='options' onClick={() => callback(alias)}>
    <span className='outline'>{typeId}</span>
    <span>{title}</span>
  </div>
);

const Activities = ({ callback, dataAmount }) => {
  const context = useContext(EstimatorContext);
  const { activityTypes } = context.state;
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
        <DataAmount dataAmount={dataAmount} />
      </div>
      <button onClick={() => context.resetValues()}>Reset values</button>
      <button>Recommend Plan</button>
    </div>
  );
};

const DataEstimator = () => {
  const [options, setOptions] = useState(true);

  const [activeComponent, setActiveComponent] = useState(null);
  const [data, setData] = useState(0);

  const handleCallback = (name) => {
    // const comp = plans[name];
    setActiveComponent(name);
  };

  const handleOptionsPath = () => {
    setOptions(true);

    setActiveComponent(null);
  };

  useEffect(() => {
    if (activeComponent !== null) setOptions(false);
  }, [activeComponent]);

  return (
    <div className='Est-App'>
      {options ? (
        <Activities callback={handleCallback} dataAmount={data} />
      ) : (
        <PageStepper lists={activeComponent} optionsCallback={handleOptionsPath} />
      )}
    </div>
  );
};

export default DataEstimator;
// <PlanRecommendation />
