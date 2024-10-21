// src/components/TodoForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description };

    try {
      const response = await axios.post('http://localhost:8000/api/todos/', newTodo);
      onAdd(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
