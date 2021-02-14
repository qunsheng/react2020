import React from 'react';

// ref passed this way
function Input({type, onKeyDown, placeholder}, ref) {
    return <input type={type} ref={ref} onKeyDown={onKeyDown} placeholder={placeholder}></input> 
}

// use forwardRef
const forwardInput = React.forwardRef(Input);
export default forwardInput;