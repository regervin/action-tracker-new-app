import { useState, useEffect } from 'react';
import { ActionItem, Department } from '../types/actionItem';

export const useActionItems = () => {
  const [department, setDepartment] = useState<Department>(() => {
    try {
      const saved = localStorage.getItem('department');
      return saved ? JSON.parse(saved) : {
        name: '',
        responsiblePerson: '',
        date: ''
      };
    } catch (error) {
      return {
        name: '',
        responsiblePerson: '',
        date: ''
      };
    }
  });

  const [items, setItems] = useState<ActionItem[]>(() => {
    try {
      const saved = localStorage.getItem('actionItems');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('actionItems', JSON.stringify(items));
    localStorage.setItem('department', JSON.stringify(department));
  }, [items, department]);

  const updateDepartment = (updates: Partial<Department>) => {
    setDepartment(prev => ({ ...prev, ...updates }));
  };

  const addItem = () => {
    const newItem: ActionItem = {
      id: crypto.randomUUID(),
      action: '',
      howToAccomplish: '',
      assignedTo: '',
      dueDate: '',
      isDone: false,
      createdAt: new Date().toISOString()
    };
    setItems(prev => [...prev, newItem]);
  };

  const updateItem = (id: string, updates: Partial<ActionItem>) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return {
    department,
    updateDepartment,
    items,
    addItem,
    updateItem,
    deleteItem
  };
};
