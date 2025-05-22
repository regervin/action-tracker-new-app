import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActionItem, Department } from '../types/actionItem';

interface ActionItemsContextType {
  department: Department;
  updateDepartment: (updates: Partial<Department>) => void;
  actionItems: ActionItem[];
  addActionItem: () => void;
  updateActionItem: (id: string, updates: Partial<ActionItem>) => void;
  deleteActionItem: (id: string) => void;
}

const defaultDepartment: Department = {
  name: '',
  responsiblePerson: '',
  date: new Date().toISOString().split('T')[0]
};

const ActionItemsContext = createContext<ActionItemsContextType | undefined>(undefined);

export function ActionItemsProvider({ children }: { children: React.ReactNode }) {
  const [department, setDepartment] = useState<Department>(defaultDepartment);
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);

  useEffect(() => {
    const storedDepartment = localStorage.getItem('department');
    const storedItems = localStorage.getItem('actionItems');
    
    if (storedDepartment) {
      try {
        setDepartment(JSON.parse(storedDepartment));
      } catch (error) {
        console.error('Error parsing stored department:', error);
        setDepartment(defaultDepartment);
      }
    }
    
    if (storedItems) {
      try {
        setActionItems(JSON.parse(storedItems));
      } catch (error) {
        console.error('Error parsing stored items:', error);
        setActionItems([]);
      }
    }
  }, []);

  const updateDepartment = (updates: Partial<Department>) => {
    const updatedDepartment = { ...department, ...updates };
    setDepartment(updatedDepartment);
    localStorage.setItem('department', JSON.stringify(updatedDepartment));
  };

  const addActionItem = () => {
    const newItem: ActionItem = {
      id: Date.now().toString(),
      action: '',
      howToAccomplish: '',
      assignedTo: '',
      dueDate: new Date().toISOString().split('T')[0],
      isDone: false,
      createdAt: new Date().toISOString()
    };
    
    const updatedItems = [...actionItems, newItem];
    setActionItems(updatedItems);
    localStorage.setItem('actionItems', JSON.stringify(updatedItems));
  };

  const updateActionItem = (id: string, updates: Partial<ActionItem>) => {
    const updatedItems = actionItems.map(item =>
      item.id === id ? { ...item, ...updates } : item
    );
    setActionItems(updatedItems);
    localStorage.setItem('actionItems', JSON.stringify(updatedItems));
  };

  const deleteActionItem = (id: string) => {
    const updatedItems = actionItems.filter(item => item.id !== id);
    setActionItems(updatedItems);
    localStorage.setItem('actionItems', JSON.stringify(updatedItems));
  };

  const value = {
    department,
    updateDepartment,
    actionItems,
    addActionItem,
    updateActionItem,
    deleteActionItem
  };

  return (
    <ActionItemsContext.Provider value={value}>
      {children}
    </ActionItemsContext.Provider>
  );
}

export function useActionItems() {
  const context = useContext(ActionItemsContext);
  if (context === undefined) {
    throw new Error('useActionItems must be used within an ActionItemsProvider');
  }
  return context;
}
