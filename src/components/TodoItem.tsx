import React from 'react';
import { Todo } from '../types'
import { FaTrash } from 'react-icons/fa'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-white border rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-600 focus:outline-none"
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default TodoItem
