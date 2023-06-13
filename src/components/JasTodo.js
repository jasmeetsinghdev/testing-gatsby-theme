import React from 'react'

const JasTodo = ({task, toggleComplete, deleteTodo, editTodo, index}) => {
  return (
    <div className={`${task.completed ? 'row mb-3 bg-white rounded p-4 shadow align-items-center todoList completedTodo': "row mb-3 bg-white rounded p-4 shadow align-items-center todoList"}`}>      
      <div className='col-md-8 peraTodo'>
        <div className='d-flex align-items-center'>
          <h6 className='me-4 rounded-circle w-10 h-10 text-center bg-blue p-2 ms-n2 text-white'>{index}</h6>
          <p>{task.task}</p>
        </div>
      </div>
        <div className='col-md-4 d-flex justify-content-end'>
        <button className='btn btn-info me-2' onClick={() => toggleComplete(task.id)}>Done</button>

          <button className='btn btn-info me-2' onClick={() => editTodo(task.id)}>Edit</button>
          <button className='btn btn-danger' onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
      
    </div>
  )
}

export default JasTodo
