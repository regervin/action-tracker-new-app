import React from 'react';
import { useActionItems } from './hooks/useActionItems';
import DepartmentForm from './components/DepartmentForm';
import ActionItemList from './components/ActionItemList';

export default function App() {
  const {
    department,
    updateDepartment,
    items,
    addItem,
    updateItem,
    deleteItem
  } = useActionItems();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Action Item Tracker</h1>
        
        <DepartmentForm
          department={department}
          onUpdate={updateDepartment}
        />

        <ActionItemList
          items={items}
          onUpdate={updateItem}
          onDelete={deleteItem}
          onAdd={addItem}
        />
      </div>
    </div>
  );
}
