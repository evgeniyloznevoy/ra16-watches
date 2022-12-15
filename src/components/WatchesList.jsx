import React from 'react'
import WatchesItem from './WatchesItem'

export default function WatchesList({ watches, onDelete }) {

    const watchesListItems = watches.map((item) => {
        return (
            <li key={item.id} className='WatchesList-Item'>
                <WatchesItem
                    name={item.name}
                    timeZone={item.timeZone}
                    onDelete={() => onDelete(item.id)}
                />
            </li>
        )
    })

    return (
        <ul className='WatchesList'>
            {watchesListItems}
        </ul>
    )
}