import React, { Fragment, useState, useMemo, useEffect } from 'react';

const textBoxStyle = {
    width: '50px',
};

const formElementStyle = {
    padding: '0px 10px',
};

const calculate = (a, b, symbols) => {
    console.log('calculate is called');
    switch (symbols) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 0;
    }
}

/* const useCalculator = (a, b, symbols) => {
    const result = useMemo(() => calculate(a, b, symbols), [a, b, symbols]);
    return result;
} */

/* export const CalculationResult = ({ a, b, symbols }) => {
    const result = useMemo(() => calculate(a, b, symbols), [a, b, symbols]);
    return (
        <span style={formElementStyle}>
            <label htmlFor="c"></label>
            <input id="c" type="text" style={textBoxStyle} value={result} readOnly />
        </span>
    );
}; */

const useDate = (d) => {
    const [dateTime, setDateTime] = useState(d);
    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return dateTime;
}

export const SimpleCalculator = () => {
    const dateTime = useDate(new Date());
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [symbols, setSymbols] = useState('+');
    // recalculated only when input change
    const result = useMemo(() => calculate(a, b, symbols), [a, b, symbols]);
    // recalculated on every render
    // const result = calculate(a, b, symbols);

    const handleA = ({ target: { value } }) => {
        setA(value ? +value : '');
    }

    const handleB = ({ target: { value } }) => {
        setB(value ? +value : '');
    }

    const handleSymbols = ({ target: { value } }) => {
        setSymbols(value);
    }

    return (
        <Fragment>
            <span style={formElementStyle}>
                <label htmlFor="a">Time</label>
                {dateTime.toLocaleTimeString()}
            </span>
            <span style={formElementStyle}>
                <label htmlFor="a"></label>
                <input id="a" type="text" style={textBoxStyle} value={a} onChange={handleA} />
            </span>
            <span>
                <label htmlFor="symbols"></label>
                <select id="symbols" value={symbols} onChange={handleSymbols}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </span>
            <span style={formElementStyle}>
                <label htmlFor="b"></label>
                <input id="b" type="text" style={textBoxStyle} value={b} onChange={handleB} />
            </span>
            <span>=</span>
            <span style={formElementStyle}>
                <label htmlFor="c"></label>
                <input id="c" type="text" style={textBoxStyle} value={result} readOnly />
            </span>
        </Fragment>
    );
};