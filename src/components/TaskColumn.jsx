import React from 'react';
import './TaskColumn.css';

const TaskColumn = (props) => {
    const {title,icons} = props
    return (
        <section className='task_column'>
            <h2 className='task_column_heading' > <img className='task_column_icon' src={icons} alt="" />{title}</h2>
        </section> 
    );
}

export default TaskColumn;