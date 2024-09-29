/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react';

const ReduceReRenderUsingMemo = () => {
  const [t, sett] = useState('Initial');

  function handleClick() {
    const a = Math.random();
    sett(a);
  }

  return (
    <>
      <Header title={t} /> {/* This will re-render since the title prop changes */}
      <Header title="Hello" /> {/* These should not re-render */}
      <Header title="Hello" />
      <Header title="Hello" />
      <Header title="Hello" />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

const Header = memo(function Header({ title }) {
  console.log('Rendering:', title); // This will show which components re-render
  return <div>{title}</div>;
});

export default ReduceReRenderUsingMemo;
