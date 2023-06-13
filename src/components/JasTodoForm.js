import React, { useState } from 'react'

const JasTodoForm = ({addTodo, count}) => {
  const [inputValue, setInputValue] = useState ();
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue) {
      // add todo
      addTodo(inputValue);
      // clear form after submission
      setInputValue('');
    }
    else {
      alert("Enter your todo")
    }
    
    
  }
  return (
    <div>
      <form className='mb-5' onSubmit={handleSubmit}>
        <h4 className='col-md-12 text-red'>Enter your todo</h4>
        <p>{count} Task Remaining</p>
        <div className='d-flex'>
          <input className='form-control' type='text' placeholder='Enter your todos' value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
          />
          <button className='btn btn-primary'>Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default JasTodoForm
