import React from 'react';

import './App.css';
import DataEstimator from './dataEstimator/DataEstimator';
import { DataController } from './context';
import RollingNumbers from './RollingNumbers';
import Example from './contextExample/Example';

function App() {
  const [price, setPrice] = React.useState(0);
  const [prev, setPrev] = React.useState(10);

  const [slide, setSlide] = React.useState(10);

  // var callClass;
  // if (prev > price) {
  //   callClass = 'numberDown';
  //   setTimeout(() => {
  //     callClass = 'number';
  //   }, 1000);
  // } else if (prev < price) {
  //   callClass = 'numberUp';
  //   setTimeout(() => {
  //     callClass = 'number';
  //   }, 1000);
  // } else {
  //   callClass = 'number';
  // }

  // const handleNumberChange = (value) => {
  //   setPrev(price);
  //   setPrice(value);
  // };
  // const handleNumberUp = () => {
  //   setPrev(price);
  //   setPrice(price + 1);
  // };
  // const handleNumberDown = () => {
  //   setPrev(price);
  //   setPrice(price - 1);
  // };

  return (
    <DataController>
      <DataEstimator />
    </DataController>
  );
}

export default App;

// <div>
//   <SliderCustom min={0} max={100} step={0.5} onChange={(value) => handleNumberChange(value)} />
// </div>
// {price}
// <RollingNumbers price={price} prev={prev} callClass={callClass} />
// <Activities />
/*<h2>price</h2>








      <button onClick={handleNumberUp}>Plus</button>
      <button onClick={handleNumberDown}>Minus</button>
      <SliderCustom />*/

// <Slider
//   x={slide}
//   styles={{
//     track: {
//       backgroundColor: 'gray',
//     },
//     active: {
//       backgroundColor: 'blue',
//     },
//     thumb: {
//       width: 20,
//       height: 20,
//     },
//   }}
//   xmin={0}
//   xmax={24}
//   xstep={0.5}
//   onChange={({ x }) => setSlide(parseFloat(x.toFixed(2)))}
// />
