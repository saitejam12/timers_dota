import React, { useState, useContext, createContext, useEffect } from 'react';
import * as vm from './dataEstimator.json';

const EstimatorContext = createContext();
const useEstimatorContext = () => useContext(EstimatorContext);
const DataController = ({ children }) => {
  const { activityTypes, ...initialState } = vm.default;

  const [state, setState] = useState(initialState);
  const [data, setData] = useState(0);
  const updateValues = (id, item) => {
    setState({ ...state, [id]: item });
  };

  // useEffect(() => {
  //   let dataAmount = state => state.forEac.reduce((total, obj) => obj.total + total, 0);
  // }, [state]);

  const resetValues = () => {
    console.log('reset');
    setState(initialState);
  };

  return <EstimatorContext.Provider value={{ state, updateValues, resetValues }}>{children}</EstimatorContext.Provider>;
};
const DataConsumer = EstimatorContext.Consumer;
export { DataController, useEstimatorContext, DataConsumer, EstimatorContext };
