import React, { Component } from 'react';
import moment from 'moment';

export default class WatchesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().utcOffset(this.props.timeZone * 60).format('HH:mm:ss')
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: moment().utcOffset(this.props.timeZone * 60).format('HH:mm:ss')
        });
    }

    render() {
        return (
            <div className='WatchesItem'>
                <h5 className='WatchesItem-Name'>{this.props.name}</h5>
                <div className='WatchesItem-Time'>{this.state.time}</div>
                <button
                    type='button'
                    className='WatchesItem-Delete'
                    onClick={this.props.onDelete}
                >х</button>
            </div>
        )
    }
}