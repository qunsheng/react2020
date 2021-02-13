import React, {memo} from 'react';

const Child = (props) => {
    function changeNumber() {
        props.changeNumber(Math.random());
    }
    // if you see this, the child component rerender
    console.log("here");
    return (
        <div>
            <h1>Child: {props.number}</h1>
            <button onClick={changeNumber}>
                Click to change child number
            </button>
        </div>
    )

}

// export default Child;

//
// use memo to only rerender if any of props changing
//
export default memo(Child);