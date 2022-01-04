import React, { useState } from "react";

function ToDoForm(props) {
  // const { addTodo } = props is the same as: const addTodo = props.addTodo 
  const { addTodo } = props;
  const [formText, setValue] = useState("");
  const [formDate, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formText) {
      return;
    }
    addTodo({
        text:formText, 
        date:formDate,
      });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      value ={formText}
      type="text" 
      placeholder="Add Todo..." 
      onChange={(event) => setValue(event.target.value)}
      />
       <input 
      value ={formDate}
      type="date" 
      onChange={(event) => setDate(event.target.value)}
      />
    </form>
  );
}

export default ToDoForm;
