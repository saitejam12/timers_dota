import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Index';
import About from './About';

import Context from './Context';

const Example = () => {
  const [value, setValue] = useState({ id: 4, username: 'sai', email: 'sai@email.com' });
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Context.Provider value={providerValue}>
          <Route path='/' exact component={Index} />
          <Route path='/about' component={About} />
        </Context.Provider>
      </div>
    </Router>
  );
};

export default Example;
