import React from 'react';
import { ActionItem } from '../types/actionItem';

interface ActionItemListProps {
  items: ActionItem[];
  onUpdate: (id: string, updates: Partial<ActionItem>) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

export default function ActionItemList({ items, onUpdate, onDelete, onAdd }: ActionItemListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">How It Will Be Accomplished</th>
              <th className="px-4 py-2 text-left">Who Will Do It</th>
              <th className="px-4 py-2 text-left">When</th>
              <th className="px-4 py-2 text-center">Done</th>
              <th className="px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className={`border-t ${item.isDone ? 'bg-green-50' : ''}`}>
                <td className="px-4 py-2">
                  <textarea
                    value={item.action}
                    onChange={(e) => onUpdate(item.id, { action: e.target.value })}
                    className={`w-full p-2 border rounded ${item.isDone ? 'line-through' : ''}`}
                    rows={2}
                  />
                </td>
                <td className="px-4 py-2">
                  <textarea
                    value={item.howToAccomplish}
                    onChange={(e) => onUpdate(item.id, { howToAccomplish: e.target.value })}
                    className={`w-full p-2 border rounded ${item.isDone ? 'line-through' : ''}`}
                    rows={2}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={item.assignedTo}
                    onChange={(e) => onUpdate(item.id, { assignedTo: e.target.value })}
                    className={`w-full p-2 border rounded ${item.isDone ? 'line-through' : ''}`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="date"
                    value={item.dueDate}
                    onChange={(e) => onUpdate(item.id, { dueDate: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={(e) => onUpdate(item.id, { isDone: e.target.checked })}
                    className="w-5 h-5 text-blue-600"
                  />
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button
        onClick={onAdd}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Row
      </button>
    </div>
  );
}
