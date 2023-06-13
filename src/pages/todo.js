import React, { useState } from 'react'
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Todo = () => {
  const[listTodo, setListTodo] = useState([]);
  const addList = (inputText)=> {
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  }

  const deleteTodo = (key)=> {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='container'>
      <TodoInput addList={addList} />
      <h1 className='mb-10'>All Todos</h1>

     

      {listTodo.map((listItem, index) => {
        return (
          <TodoList item={listItem} index={index} key={index} deleteItem={deleteTodo} />
        )
      })}

    </div>
  )
}

export default Todo
