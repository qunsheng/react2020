import React, {useState} from "react";
import shortid from 'shortid';

/*
  Todo:
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos and show number of completed todos
  5. 3 buttons to filter all/active/complete
  6. delete todo
*/

// add todo form component
function TodoForm ( {addTodo} ) {
  const [todo, setTodo] = useState("");
  function changeValue(e) {
    setTodo(e.target.value);
  }
  function add(e) {
    if(e.key === 'Enter'){
      addTodo({
        todo: todo,
        id: shortid.generate(),
        complete: false
      });
      setTodo("");
      e.preventDefault();
    } 
  }
  return <div>
      <input placeholder="type todo and hit enter to add"  onKeyPress={add} onChange = {changeValue} value={todo}></input>
  </div>
}

// calculate total function using reduce
function calculateTotal (todos, field, reverse) {
  let total = 0;
  total =  todos.reduce( (sum, todo ) => {
      if( reverse) {
        return todo[field]? sum: sum +1;
      } else {
        return todo[field]? sum+1: sum;
      }
      
    }, 0)
  return total;
}

// main app
function App () {
  const [todos, setTodos] = useState([]);
  const [numActiveTodos, setNumActiveTodos] = useState(0);
  const [numCompletedTodos, setNumCompletedTodos] = useState(0);
  const [filterField, setFilterField] = useState(null);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    const numActive = calculateTotal (newTodos, "complete", true);
    const numCompleted = calculateTotal (newTodos, "complete", false);
    setTodos(newTodos);
    setNumActiveTodos( numActive);
    setNumCompletedTodos (numCompleted);
  }

  const markComplete = (todoId) => {
    const todoObj = todos.find(obj => obj.id === todoId);
    todoObj.complete = true;
    let newTodos = [...todos]; // change the refrence of todo array to force app rerender
    setTodos( newTodos); 
    const numActive = calculateTotal (newTodos, "complete", true);
    const numCompleted = calculateTotal (newTodos, "complete", false);
    setNumActiveTodos( numActive);
    setNumCompletedTodos (numCompleted);
  }

  const deleteTodos = (todoId) => {
    let newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos( newTodos); 
  }

  let filteredTodos = [];

  if(filterField === "complete") {
    filteredTodos = todos.filter(todo => todo.complete);
  } else if(filterField === "active") {
    filteredTodos = todos.filter(todo => !todo.complete);
  } else {
    filteredTodos = todos;
  }

  return (
    <div >
      <h1> Todo App</h1>
      <button onClick={ () => setFilterField(null)}>All</button>
      <button onClick={ () => setFilterField("active")}>Active</button>
      <button onClick={ () => setFilterField("complete")}>Completed</button>
      <p>Number of active todos: {numActiveTodos} </p>
      <p>Number of completed todos: {numCompletedTodos} </p>
      <TodoForm addTodo = {addTodo} />
      {filteredTodos.map( todo => {
        return <div key={todo.id}>
          <span style={ todo.complete ? {textDecoration: "line-through"}: {}}> {todo.todo} </span>
          {!todo.complete &&  <button onClick={ () => markComplete (todo.id)}>
            complete
          </button>}
          <button onClick={ () => deleteTodos (todo.id)}>x</button>
        </div>
      })}
    </div>

  )
}

export default App;


