import React from 'react';
import { render } from 'react-dom';

import logo from './logo.png';

const App = () => (
  <> 
    <h1>Hello world!</h1>
    <img width="100" src={logo} />
    <img width="100" src="./logo.png" />
  </>
);

render(<App />, document.getElementById('root'));