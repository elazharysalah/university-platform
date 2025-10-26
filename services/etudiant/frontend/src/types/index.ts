export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  promotion: string;
  avatarUrl?: string;
}

export interface Absence {
  id: string;
  subject: string;
  session: string;
  teacher: string;
  date: string;
  justified: boolean;
  justification?: string;
}

export interface Grade {
  id: string;
  subject: string;
  grade: number;
  coefficient: number;
  date: string;
  semester: number;
}

export interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

export interface Payment {
  id: string;
  reference: string;
  amount: number;
  date: string;
  detail: string;
  status: 'paid' | 'pending' | 'cancelled';
  justificationUrl?: string;
}

export interface Message {
  id: string;
  from: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
}

export interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  day: number; // 0-6 (Monday-Sunday)
  startTime: string;
  endTime: string;
  type: 'cours' | 'td' | 'tp';
}
