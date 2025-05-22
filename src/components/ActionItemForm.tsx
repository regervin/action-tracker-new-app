import React, { useState } from 'react';
import { ActionItem } from '../types/actionItem';

const ActionItemForm: React.FC = () => {
  const [formData, setFormData] = useState({
    department: '',
    description: '',
    assignedTo: '',
    dueDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Department"
          className="border p-2 rounded"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Assigned To"
          className="border p-2 rounded"
          value={formData.assignedTo}
          onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Action Item
      </button>
    </form>
  );
};

export default ActionItemForm;
