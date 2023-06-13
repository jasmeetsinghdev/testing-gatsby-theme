import React from 'react'
import { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setInputText] = useState ('');
    
  return (
    <div className='flex'>
      <input className='form-control' typeFor='text' placeholder='Enter your todo' 
      value={inputText}
      onChange={e=>{
        setInputText(e.target.value)
      }}
      />
      <button className='btn btn-primary' onClick={()=>{
        props.addList(inputText)
        setInputText('')
      }}>Add</button> 
      
      
    </div>
  )
}

export default TodoInput
