import React, { useState, useContext } from 'react';

const defaultContext = {
  videoAndGameActivities: [
    {
      id: ' streaming',
      per_hour_sd: 700,
      per_hour_hd: 2000,
      per_hour_4k: 8000,
      value: 0,
    },
    {
      id: 'music',
      per_hour: 55,
      value: 0,
    },
    {
      id: 'gaming',
      per_hour: 34,
      value: 0,
    },
    {
      id: 'video_calling',
      per_hour: 200,
      value: 0,
    },
  ],
};
const DataContext = () => {
  const [data, setData] = useState(defaultContext);
  return <div>context</div>;
};

export default DataContext;
