import React from 'react'

const TodoList = (props) => {
  return (
    <div className='mt-5'>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-between align-items-center'>
          <p>{props.item}</p>
          <button className='btn btn-danger' onClick={e=>{
            props.deleteItem(props.index)
          }}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
