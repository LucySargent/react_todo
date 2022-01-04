//Import modules
import React, { useState } from "react";
import TodoItem from "./components/ToDoItem/TodoItem";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import "./App.css";

//Import components
function App() {
  //App function returns a jsx expression incl. some html attributes
  //todosList array values
  const [todosList, setTodos] = useState([
    {
      text: "0 Learn about React",
      isCompleted: false,
      date: ""
    },
    {
      text: "1 Climb a mountain",
      isCompleted: false,
      date: ""
    },
    {
      text: "2 Make a clay pot",
      isCompleted: false,
      date: ""
    },
    {
      text: "3 Swim with manta rays",
      isCompleted: false,
      date: ""
    },
  ]);


  //addTodo function is for adding a new item to the state
  //builds a new array: 'newTodosList'
  //spreads values from old 'todosList' into new array
  //setTodos makes newTodosList the new state
  //update methods go in app.js because that's where the data is
  const addTodo = (form) => {
    const {text, date} = form
    const newTodosList = [...todosList, { text, date }];  
    setTodos(newTodosList);
  };
  
//arrow function, stored in a const. structure: =, argument/s (if any), arrow, function body
  const completeTodo = (index) => {
    //spreading todosList into newTodosList
    const newTodosList = [...todosList];
    newTodosList[index].isCompleted = true;
    setTodos(newTodosList);
  };
  const removeTodo = (index) => {
    const newTodosList = [...todosList];
    newTodosList.splice(index, 1); //1 is quantity not an index
    setTodos(newTodosList);
}

  return (
    //
    <div className="app">
      <div className="todo-list">
        <h1>My Todo List</h1>
        {/*for each todo item call ToDoItem component. Perameters: todo + index*/}
        {todosList.map((todo, index) => (
        <TodoItem 
          todo={todo} //the todo object which includes all the key:values
          key={index} 
          index={index} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo}
          />
        ))}
        <ToDoForm 
        addTodo={addTodo} 
        />
      </div>
    </div>
  );
}

export default App;
