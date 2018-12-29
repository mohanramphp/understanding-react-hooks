import React, { useState, Fragment } from 'react';

export const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(+initialCount);
    const padding = {
        marginLeft: '5px',
        marginRight: '5px',
    }
    return (
        <Fragment>
            <button style={padding} className="Pad" onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button style={padding} className="Pad" onClick={() => setCount(count + 1)}>+</button>
        </Fragment>
    );
}
