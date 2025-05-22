import React from 'react';
import DepartmentForm from './components/DepartmentForm';
import ActionItemList from './components/ActionItemList';
import { ActionItemsProvider } from './context/ActionItemsContext';

function App() {
  return (
    <ActionItemsProvider>
      <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Action Items Tracker</h1>
          <DepartmentForm />
          <ActionItemList />
        </div>
      </div>
    </ActionItemsProvider>
  );
}

export default App;
