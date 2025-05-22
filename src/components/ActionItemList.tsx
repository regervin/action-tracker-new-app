import React from 'react';
import { useActionItems } from '../context/ActionItemsContext';

const ActionItemList: React.FC = () => {
  const { actionItems, addActionItem, updateActionItem, deleteActionItem } = useActionItems();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              How to Accomplish
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Who Will Do It
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              When
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Done
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {actionItems?.map((item) => (
            <tr key={item.id} className={item.isDone ? 'bg-green-50' : ''}>
              <td className="px-6 py-4">
                <textarea
                  value={item.action}
                  onChange={(e) => updateActionItem(item.id, { action: e.target.value })}
                  className="w-full border rounded p-2"
                  rows={2}
                />
              </td>
              <td className="px-6 py-4">
                <textarea
                  value={item.howToAccomplish}
                  onChange={(e) => updateActionItem(item.id, { howToAccomplish: e.target.value })}
                  className="w-full border rounded p-2"
                  rows={2}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="text"
                  value={item.assignedTo}
                  onChange={(e) => updateActionItem(item.id, { assignedTo: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="date"
                  value={item.dueDate}
                  onChange={(e) => updateActionItem(item.id, { dueDate: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={(e) => updateActionItem(item.id, { isDone: e.target.checked })}
                  className="h-5 w-5 text-blue-600 rounded"
                />
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => deleteActionItem(item.id)}
                  className="text-red-600 hover:text-red-800 mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4">
        <button
          onClick={addActionItem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default ActionItemList;
