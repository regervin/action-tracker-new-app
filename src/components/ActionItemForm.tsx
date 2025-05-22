import React, { useState } from 'react';
import { ActionItem } from '../types/actionItem';

interface ActionItemFormProps {
  onSubmit: (item: Omit<ActionItem, 'id' | 'createdAt'>) => void;
}

export default function ActionItemForm({ onSubmit }: ActionItemFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<ActionItem['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      dueDate,
      priority,
      status: 'pending'
    });

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Action item title"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex-1">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as ActionItem['priority'])}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Action Item
      </button>
    </form>
  );
}
