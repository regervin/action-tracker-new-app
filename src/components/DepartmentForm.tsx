import React from 'react';
import { Department } from '../types/actionItem';

interface DepartmentFormProps {
  department: Department;
  onUpdate: (updates: Partial<Department>) => void;
}

export default function DepartmentForm({ department, onUpdate }: DepartmentFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department Name
          </label>
          <input
            type="text"
            value={department.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter department name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Responsible Person
          </label>
          <input
            type="text"
            value={department.responsiblePerson}
            onChange={(e) => onUpdate({ responsiblePerson: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter responsible person"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={department.date}
            onChange={(e) => onUpdate({ date: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
