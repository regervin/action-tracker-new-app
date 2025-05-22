import { useState, useEffect } from 'react';
import { Todo, FilterStatus } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState<FilterStatus>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    filter,
    setFilter
  };
};
