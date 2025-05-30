import { useState, useEffect } from 'react';
import { ActionItem, Department } from '../types/actionItem';

export const useActionItems = () => {
  const [department, setDepartment] = useState<Department>({
    name: '',
    responsiblePerson: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);

  useEffect(() => {
    const storedDepartment = localStorage.getItem('department');
    const storedItems = localStorage.getItem('actionItems');
    
    if (storedDepartment) {
      try {
        setDepartment(JSON.parse(storedDepartment));
      } catch (error) {
        console.error('Error parsing stored department:', error);
      }
    }
    
    if (storedItems) {
      try {
        setActionItems(JSON.parse(storedItems));
      } catch (error) {
        console.error('Error parsing stored items:', error);
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

  return {
    department,
    updateDepartment,
    actionItems,
    addActionItem,
    updateActionItem,
    deleteActionItem
  };
};
