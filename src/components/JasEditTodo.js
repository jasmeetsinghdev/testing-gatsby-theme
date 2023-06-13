import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [inputValue, setInputValue] = useState (task.task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(inputValue, task.id);
    setInputValue('');
  }
  return (
    <div>
      <form className='d-flex mb-5 border border-red rounded shadow bg-gray p-5' onSubmit={handleSubmit}>
        <input className='form-control' type='text' placeholder='Updated text' value={inputValue}
          onChange={(e)=> setInputValue(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm
