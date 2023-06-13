import React from 'react'
import { useState } from 'react'
import JasTodoForm from '../components/JasTodoForm';
import EditTodoForm from '../components/JasEditTodo';
import JasTodo from '../components/JasTodo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const Jastodo = () => {
  const [toDos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("toDos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [count, setCount] = useState();

  const addTodo = todo => {
    setTodos([...toDos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(toDos);
  }

  console.log(addTodo);

  const deleteTodo = id => {
    setTodos(toDos.filter(todo => todo.id !== id))
  }

  const toggleComplete = id => {
    setTodos(toDos.map(todo => todo.id === id ? {
      ...todo, completed: !todo.completed} : todo))
    }

    const editTodo = id => {
      setTodos(toDos.map(todo => todo.id === id ? {
        ...todo, isEditing: !todo.isEditing} : todo))
    }

    const edtiTask = (task, id) => {
      setTodos(toDos.map(todo => todo.id === id ? {
        ...todo, task, isEditing: !todo.isEditing} : todo))
      }
  
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 mx-auto p-10 rounded' style={{background: "#ccc"}}>
          <JasTodoForm addTodo={addTodo} count={addTodo.length}/>

          {toDos.map((todo, index) => (

            todo.isEditing ?(
              <EditTodoForm editTodo={edtiTask} task={todo} />
            ) :
            (

              <JasTodo task={todo} key={index} index={index + 1} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />

            )

              

            )          
          )}
        </div>
      </div>
    </div>
  )
}

export default Jastodo
