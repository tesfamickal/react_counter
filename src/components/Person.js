import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age {props.count}</p>
            <p>Hair Color: Black</p>
        </div>
    )
}

export default Person;