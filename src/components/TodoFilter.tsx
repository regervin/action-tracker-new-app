import React from 'react';
import { FilterStatus } from '../types/todo';

interface Props {
  filter: FilterStatus;
  onChange: (filter: FilterStatus) => void;
}

export const TodoFilter = ({ filter, onChange }: Props) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onChange('all')}
        className={`px-3 py-1 rounded ${
          filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onChange('active')}
        className={`px-3 py-1 rounded ${
          filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => onChange('completed')}
        className={`px-3 py-1 rounded ${
          filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        Completed
      </button>
    </div>
  );
};
