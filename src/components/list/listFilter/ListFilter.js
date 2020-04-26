import React from 'react';
import '../list.scss'

const ListFilter = ({filter, setFilter}) => {

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return <div className={'list-filter'}>
        <select value={filter} onChange={handleChange}>
            <option value={'unfulfilled'}>Неисполненные</option>
            <option value={'fulfilled'}>Исполненные</option>
            <option value={'all'}>Все</option>
        </select>
    </div>
}

export default ListFilter