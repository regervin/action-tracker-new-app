export interface Department {
  name: string;
  responsiblePerson: string;
  date: string;
}

export interface ActionItem {
  id: string;
  action: string;
  howToAccomplish: string;
  assignedTo: string;
  dueDate: string;
  isDone: boolean;
  createdAt: string;
}
