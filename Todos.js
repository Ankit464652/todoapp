import React from 'react'
import { TodoItem } from '../components/TodoItem';


export const Todos = (props) => {

  let mystyle={
    minHeight:"70vh",
    margin: "10"
  }
  return (
    <div className="container my-4" style={mystyle}>
      <h3 className='text-center my-3'>Todo List</h3><hr />
      {/* {props.todos.map()} */}

      {props.todos.length === 0 ? <h1 className='text-center'> "No Todos in Display"</h1> :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>
  )
}

