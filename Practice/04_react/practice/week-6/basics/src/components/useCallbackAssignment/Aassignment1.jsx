/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Aassignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        console.log("inside handle increment")
        setCount((currCount)=>{
            return currCount + 1;
        });
    }, []);

    const handleDecrement=useCallback(()=>{
        console.log("inside handle decrement")
        setCount((currCount)=>{
            return currCount -1;
        });
    },[]);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(function CounterButtons({onIncrement,onDecrement}){
    console.log("inside counter buttons");
    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );
});

