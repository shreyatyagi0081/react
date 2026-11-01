
import { Todo } from './Todo';

export const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todo-list-section">
      <h3 className="section-title">Your Todos</h3>

      {todos.length === 0 ? (
        <div className="empty-state">
          <h5>No tasks yet!</h5>
          <p>Add your first task above to get started.</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.sno}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};
