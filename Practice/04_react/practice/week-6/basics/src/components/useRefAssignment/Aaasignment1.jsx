import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Aaassignment1() {

    const inputRef=useRef();

    useEffect(() => {
        //this will automatically focus on initial render thats good and used by many websites  
        inputRef.current.focus();
    }, []);

    const handleButtonClick = () => {
        //document.getElementById("test").focus();
        //dumb way using DOM Manipulation
        inputRef.current.focus();

    };

    return (
        <div>
            <input id="test" type="text" placeholder="Enter text here" ref={inputRef} />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};