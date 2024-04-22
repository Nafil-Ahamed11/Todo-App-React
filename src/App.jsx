import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from '../src/assets/direct-hit.png';
import DoingIcon from '../src/assets/glowing-star.png';
import DoneIcon from '../src/assets/check-mark-button.png';



const App = ()=>{
  return(
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
      <TaskColumn title="To do" icons={todoIcon}/>
      <TaskColumn title="Doing" icons={DoingIcon}/>
      <TaskColumn title="Done" icons={DoneIcon}/>
      </main>
    </div>
  )
}

export default App;