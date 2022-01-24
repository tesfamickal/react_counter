// import React, { useState } from "react";

const Counter = props => {


    const handleClick = () => {
        props.setCount(props.count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Birthday Button for {props.name}</button>
        </div>
    )
}

export default Counter;