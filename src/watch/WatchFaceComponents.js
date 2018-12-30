import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Day, Value, Hand } from './WatchStyledComponents';

const facePropTypes = {
    date: PropTypes.object,
}

export const DefaultFace = ({ date }) => (
    <Fragment>
        <Value>{date.format('HH')}</Value>
        <Value>{date.format('mm')}</Value>
    </Fragment>
)

DefaultFace.propTypes = facePropTypes;

export const DateFace = ({ date }) => {
    const hours = date.format('HH');
    const minutes = date.format('mm');
    const monthYear = date.format('MMM DD');
    return (
        <Fragment>
            <Value>{hours}</Value>
            <Day>{monthYear}</Day>
            <Value>{minutes}</Value>
        </Fragment>
    );
}
DateFace.propTypes = facePropTypes;

export const SecondsFace = ({ date }) => {
    const hours = date.format('HH');
    const minutes = date.format('mm');
    const seconds = date.format('ss');
    return (
        <Fragment>
            <Value>{hours}</Value>
            <Value>{minutes}</Value>
            <Value>{seconds}</Value>
        </Fragment>
    )
}
SecondsFace.propTypes = facePropTypes;

export const AnalogFace = ({ date }) => {
    const seconds = (360 / 60) * date.seconds();
    const minutes = (360 / 60) * date.minutes();
    const hours = (360 / 12) * date.format('h');
    return (
        <Fragment>
            <Hand type="seconds" value={seconds} />
            <Hand type="minutes" value={minutes} />
            <Hand value={hours} />
        </Fragment>
    )
}
AnalogFace.propTypes = facePropTypes;

export const DayFace = ({ date }) => {
    const hours = date.format('H');
    const minutes = date.format('mm');
    const dayN = date.format('dd');
    const day = date.format('DD');
    return (
        <Fragment>
            <Value small>{hours}</Value>
            <Value small>{minutes}</Value>
            <Value small opaque>
                {dayN}
            </Value>
            <Value small opaque>
                {day}
            </Value>
        </Fragment>
    )
}
DayFace.propTypes = facePropTypes;