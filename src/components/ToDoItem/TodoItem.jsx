//this function renders todo items 

import React from "react";
import "./ToDoItem.css";

//original component - returned hardcoded todo item
//modified to use props
//with props object we can access key:value properties stored in todosList array in apps.js

function TodoItem(props) {
    // const { todo } = props is the same as: const todo = props.todo 
    //object destructing
    const { todo, index, completeTodo, removeTodo } = props;
    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
    {/* todo is a prop here, we defined it on line 16 */}
        {todo.text}
        {todo.date}
        <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
    </div>
    );
}

export default TodoItem;


