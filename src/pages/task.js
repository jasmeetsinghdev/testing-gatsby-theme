import React from 'react'
import TaskInput from '../components/TaskInput'
import { useState } from 'react'
import TaskList from '../components/TaskList';

const Task = () => {
    const [allTaskList, setAllTaskList] = useState([]);

    const addTask = (inputValue)=> {
        setAllTaskList([...allTaskList, inputValue]);
    }    

    const delteTodoList = key => {
        let newTaskList = [...allTaskList];
        newTaskList.splice(key, 1)
        setAllTaskList([...newTaskList])
    }    
  return (
    <div className='container'>
      <TaskInput addTask={addTask} />
      
      <h1 className='mb-10'>All Todos</h1>

          {/* {allTaskList.map((taskItem, index) => {
              return (
                  <TaskList key={index} item={taskItem} />
              )
          })} */}

          {allTaskList.map((listItem, index) => {
              return (
                  <TaskList item={listItem}  key={index} index={index} delteTodoList={delteTodoList}  />
              )
          })}


          

         
    </div>
  )
}

export default Task
