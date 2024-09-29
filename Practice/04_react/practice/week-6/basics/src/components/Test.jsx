/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


//reduced re rendering using pushing down state

const Test = () => {
  return (
    <React.Fragment>
      <div>Hello world</div>
      <ButtonText /> {/* Note: ButtonText with uppercase B */}
    </React.Fragment>
  );
};

const ButtonText = () => { // Uppercase B for component name
  const [t1, sett1] = useState('Heading 1 initial');
  
  function handleClick() {  // Fixed typo in 'handleClicl' to 'handleClick'
    const a = Math.random();
    sett1(a);
  }

  return (
    <>
      <button style={{ border: '2px solid black' }} onClick={handleClick}>
        Click me 
      </button>
      <div>{t1}</div>
    </>
  );
};

export default Test;
