import { Student, Absence, Grade, Exam, Payment, Message, ScheduleItem } from '@/types';

export const mockStudent: Student = {
  id: '1',
  firstName: 'Mohammed',
  lastName: 'Alami',
  email: 'mohammed.alami.etu23@ensem.ac.ma',
  promotion: '2023',
};

export const mockAbsences: Absence[] = [
  {
    id: '1',
    subject: 'Programmation Orientée Objet',
    session: 'TP - Séance 3',
    teacher: 'Prof. Benani',
    date: '2024-01-15',
    justified: false,
  },
  {
    id: '2',
    subject: 'Électronique Numérique',
    session: 'Cours - Séance 5',
    teacher: 'Prof. El Amrani',
    date: '2024-01-18',
    justified: true,
    justification: 'Certificat médical',
  },
];

export const mockGrades: Grade[] = [
  {
    id: '1',
    subject: 'Mathématiques Avancées',
    grade: 15.5,
    coefficient: 3,
    date: '2024-01-10',
    semester: 1,
  },
  {
    id: '2',
    subject: 'Physique Appliquée',
    grade: 14,
    coefficient: 2,
    date: '2024-01-12',
    semester: 1,
  },
];

export const mockExams: Exam[] = [
  {
    id: '1',
    subject: 'Systèmes Embarqués',
    date: '2024-02-05',
    time: '08:30',
    location: 'Amphi A',
    type: 'Session normale',
  },
  {
    id: '2',
    subject: 'Réseaux Informatiques',
    date: '2024-02-08',
    time: '14:30',
    location: 'Amphi B',
    type: 'Session normale',
  },
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    reference: 'PAY-2024-001',
    amount: 5000,
    date: '2024-01-05',
    detail: 'Caution',
    status: 'paid',
  },
  {
    id: '2',
    reference: 'PAY-2024-002',
    amount: 1200,
    date: '2024-01-10',
    detail: 'Restauration - Janvier',
    status: 'paid',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    from: 'Administration',
    subject: 'Calendrier des examens',
    content: 'Le calendrier des examens du semestre 2 est maintenant disponible.',
    date: '2024-01-20',
    read: false,
  },
];

export const mockSchedule: ScheduleItem[] = [
  {
    id: '1',
    subject: 'Programmation Orientée Objet',
    teacher: 'Prof. Benani',
    room: 'Salle 201',
    day: 1, // Lundi
    startTime: '08:30',
    endTime: '10:30',
    type: 'cours',
  },
  {
    id: '2',
    subject: 'Électronique Numérique',
    teacher: 'Prof. El Amrani',
    room: 'Lab 1',
    day: 1,
    startTime: '14:30',
    endTime: '16:30',
    type: 'tp',
  },
  {
    id: '3',
    subject: 'Mathématiques Avancées',
    teacher: 'Prof. Idrissi',
    room: 'Amphi A',
    day: 2, // Mardi
    startTime: '08:30',
    endTime: '10:30',
    type: 'cours',
  },
  {
    id: '4',
    subject: 'Systèmes Embarqués',
    teacher: 'Prof. Ziani',
    room: 'Salle 305',
    day: 3, // Mercredi
    startTime: '10:30',
    endTime: '12:30',
    type: 'td',
  },
  {
    id: '5',
    subject: 'Réseaux Informatiques',
    teacher: 'Prof. Bennani',
    room: 'Lab 2',
    day: 4, // Jeudi
    startTime: '14:30',
    endTime: '16:30',
    type: 'tp',
  },
];
