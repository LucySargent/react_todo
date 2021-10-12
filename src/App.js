import React from "react";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1>My todo list</h1>;
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
