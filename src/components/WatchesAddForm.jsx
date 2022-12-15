import { nanoid } from 'nanoid';
import React, { Component } from 'react'

const INITIAL_STATE = {
    name: '',
    timeZone: '',
    id: ''
};

export default class WatchesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            ...INITIAL_STATE,
            id: nanoid()
        });
    }

    render() {
        return (
            <form className='WatchesAddForm'
                onSubmit={this.onSubmit}
            >
                <div className='WatchesAddForm-Name'>
                    <label htmlFor="name">Название</label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        className='WatchesAddForm-Name-Input'
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                </div>
                <div className='WatchesAddForm-TimeZone'>
                    <label htmlFor="timeZone">Временная зона</label>
                    <input
                        id='timeZone'
                        name='timeZone'
                        type='text'
                        className='WatchesAddForm-TimeZone-Input'
                        onChange={this.onChange}
                        value={this.state.timeZone}
                    />
                </div>
                <button
                    type='submit'
                    className='WatchesAddForm-Button'
                >Добавить</button>
            </form>
        )
    }
}