import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Strap, Bezel, Screen, Face } from './WatchStyledComponents';
import { DefaultFace } from './WatchFaceComponents';

/* export class Watch extends Component {
    state = {
        date: moment(),
    }
    static propTypes = {
        face: PropTypes.func,
    }
    static defaultProps = {
        face: date => <DefaultFace date={date} />,
    }
    componentDidMount = () => (this.TICK = setInterval(this.update, 1000))
    componentWillUnmount = () => clearInterval(this.TICK)
    update = () => this.setState({ date: moment() })
    render = () => (
        <Strap>
            <Bezel>
                <Screen>
                    <Face>{this.props.face(this.state.date)}</Face>
                </Screen>
            </Bezel>
        </Strap>
    )
} */

/**
 * custom Hooks
 * @param {*} d
 */
const useDate = (d) => {
    const [date, setDate] = useState(d);
    useEffect(() => {
        console.log('useEffect called');
        const id = setInterval(() => setDate(moment()), 1000);
        return () => {
            console.log('useEffect flush called');
            clearInterval(id);
        }
    }, []);
    return date;
}

export const Watch = ({ face = date => <DefaultFace date={date} /> }) => {
    /* const [date, setDate] = useState(moment());
    useEffect(() => {
        console.log('useEffect called');
        const id = setInterval(() => setDate(moment()), 1000);
        return () => {
            console.log('useEffect flush called');
            clearInterval(id);
        }
    }, []); */

    const date = useDate(moment());

    return (
        <Strap>
            <Bezel>
                <Screen>
                    <Face>{face(date)}</Face>
                </Screen>
            </Bezel>
        </Strap>
    );

};

Watch.propTypes = { face: PropTypes.func };