
import Button from 'react-bootstrap/Button';

export const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-title-row">
          <h4>{todo.title}</h4>
          <span className={`status-badge ${todo.completed ? 'done' : 'pending'}`}>
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </div>

        <p>{todo.desc}</p>

        <div className="todo-actions">
          <Button
            variant="success"
            onClick={() => onToggle(todo.sno)}
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(todo.sno)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};



