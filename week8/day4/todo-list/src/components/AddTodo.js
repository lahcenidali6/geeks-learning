import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Form, Button, InputGroup } from 'react-bootstrap';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), title: text, completed: false }));
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </InputGroup>
    </Form>
  );
};

export default AddTodo;
