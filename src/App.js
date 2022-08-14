import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [btnClr, setBtnClr] = useState('red');

  const toggleClrHandler = () => {
    setBtnClr((clr) => (clr === 'red' ? 'blue' : 'red'));
  };

  const btnStyle = { backgroundColor: btnClr === 'red' ? 'red' : 'blue' };
  const btnText = `Change to ${btnClr === 'red' ? 'blue' : 'red'}`;

  return (
    <div className='App'>
      <button type='button' style={btnStyle} onClick={toggleClrHandler}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
