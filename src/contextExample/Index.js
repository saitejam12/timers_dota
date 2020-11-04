import React, { useContext } from 'react';
import Context from './Context';

const Index = () => {
  const { value, setValue } = useContext(Context);
  return <div>{value}</div>;
};

export default Index;
