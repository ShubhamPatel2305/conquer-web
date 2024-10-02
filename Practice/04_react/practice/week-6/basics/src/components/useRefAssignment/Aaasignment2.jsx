/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

/*Great question to understand a new use case of useRef now to have this count you could hav done:
1. define a global variable outside the assignment function and increment it on each re render but using a globl variable thats outside a function component is a big no
2. you could havse used a use state for calculating number of renders but that will again cause extra re rendering as components will re render for first state change of force render and again on state change of new one we introduces
3. ok if global variables are not allowed youwould say lets keep a variable inisde the functionbut again you need to initialize it so on each re render it will get re initialized and you will loose the previous value. 

the third ways issue brings use case of useref if you need a variable to store something inisde your component whose value gets initialized only when the component mounts.
*/

export function Aaassignment2() {
    const [, forceRender] = useState(0);

    const numberOfRerenders=useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };
    numberOfRerenders.current++;

    return (
        <div>
            <p>This component has rendered {numberOfRerenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};