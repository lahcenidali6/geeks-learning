import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo, removeTodo } from '../features/todo/todoSlice';
import { ListGroup, Button, Badge } from 'react-bootstrap';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.title}
            </span>
            <div>
              <Badge
                bg={todo.completed ? 'success' : 'secondary'}
                className="me-2"
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ cursor: 'pointer' }}
              >
                {todo.completed ? 'Done' : 'Pending'}
              </Badge>
              <Button size="sm" variant="danger" onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
