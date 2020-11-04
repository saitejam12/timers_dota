import React, { useContext } from 'react';
import Context from './Context';
const About = () => {
  const { value, setValue } = useContext(Context);
  return (
    <div>
      {value.id}
      <div>
        {value ? (
          <button onClick={() => setValue({ ...value, id: 10 })}>Bye</button>
        ) : (
          <button onClick={() => setValue('Helo')}>Greet</button>
        )}
      </div>
    </div>
  );
};

export default About;
