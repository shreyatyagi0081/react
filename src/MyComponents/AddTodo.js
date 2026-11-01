import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }

    onAdd(title, desc);

    setTitle('');
    setDesc('');
  };

  return (
    <Form onSubmit={handleSubmit} className="todo-form">
      <Form.Group className="mb-3">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="add-todo-btn">
  + Add Todo
</Button>
    </Form>
  );
};