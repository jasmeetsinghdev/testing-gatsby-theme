import React, { useState } from 'react'

const TaskInput = (props) => {
    const[inputValue, setInputValue] = useState();

  return (
    <div className='d-flex'>
      <input type='text' placeholder='Enter your task name'    
      value={inputValue} 

        onChange={e=>
            {
                setInputValue(e.target.value)
            }
        }
      />
      <button className='btn btn-primary'
        onClick={()=>{
            props.addTask(inputValue)  
            setInputValue('')          
        }}
      >Add Task</button>
    </div>
  )
}

export default TaskInput
