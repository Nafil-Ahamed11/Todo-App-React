import React from 'react';
import './TaskForm.css'
import Tag from './Tag';

const  TaskForm =(props) =>{
    return (
        <div>
            <header className='app_header'>
                <form action="">
                    <input className='task_input' type="text" placeholder='Enter your task' />
                <div className='task_form_bottom_line'>
                    <div>
                       <Tag tagName="HTML"/>
                       <Tag tagName="CSS"/>
                       <Tag tagName="JavaScript"/>
                       <Tag tagName="React"/>
                        
                    </div>
                    <div>
                        <select className='task_status  '>
                            <option value="todo"> To do</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
                </form>
            </header>
        </div>
    );
}

export default TaskForm;