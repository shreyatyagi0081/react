
import { useState } from "react";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: Date.now(),
      title,
      desc,
      completed: false,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  const onDelete = (sno) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.sno !== sno)
    );
  };

  const toggleComplete = (sno) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.sno === sno
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };


return (
  <div className="app-shell">
    <Header title="My Todo List" />

    <main className="todo-main">
      <Container className="todo-container">
        <div className="page-heading">
          <span className="welcome-text">STAY ORGANIZED</span>
          <h1>My Tasks</h1>
          <p>Plan your day, one task at a time.</p>
        </div>

        <div className="todo-form-card">
          <AddTodo onAdd={addTodo} />
        </div>

        <Todos
          todos={todos}
          onDelete={onDelete}
          onToggle={toggleComplete}
        />
      </Container>
    </main>

    <Footer />
  </div>
);

}

export default App;

