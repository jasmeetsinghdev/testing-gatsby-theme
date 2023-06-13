import React from 'react'

const TaskList = (props) => {
  return (
    <div className='d-flex justify-content-between'>
      <p>{props.item}</p>
      <button className='btn btn-danger' onClick={e=>{
        props.delteTodoList(props.index)
      }}>Delete</button>
    </div>
  )
}

export default TaskList


