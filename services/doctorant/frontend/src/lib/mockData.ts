import { User, Thesis, Notification, Message } from '@/types/thesis';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@university.edu',
    role: 'student',
  },
  {
    id: '2',
    name: 'Dr. Fatima Ali',
    email: 'fatima.ali@university.edu',
    role: 'supervisor',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@university.edu',
    role: 'admin',
  },
];

export const mockTheses: Thesis[] = [
  {
    id: '1',
    title: 'Machine Learning Applications in Healthcare Diagnostics',
    studentId: '1',
    studentName: 'Ahmed Hassan',
    supervisorId: '2',
    supervisorName: 'Dr. Fatima Ali',
    status: 'under_review',
    submissionDate: '2025-09-15',
    lastUpdated: '2025-10-20',
    currentStep: 'supervisor',
    progressPercentage: 45,
    documents: [
      {
        id: 'd1',
        thesisId: '1',
        name: 'Thesis_Draft_v2.pdf',
        type: 'thesis',
        uploadDate: '2025-10-15',
        size: '2.4 MB',
        uploadedBy: 'Ahmed Hassan',
      },
      {
        id: 'd2',
        thesisId: '1',
        name: 'Progress_Report_Q3.pdf',
        type: 'report',
        uploadDate: '2025-10-01',
        size: '856 KB',
        uploadedBy: 'Ahmed Hassan',
      },
    ],
  },
  {
    id: '2',
    title: 'Sustainable Energy Solutions for Urban Development',
    studentId: '2',
    studentName: 'Sara Mohamed',
    supervisorId: '3',
    supervisorName: 'Dr. Omar Khalil',
    status: 'approved_supervisor',
    submissionDate: '2025-08-01',
    lastUpdated: '2025-10-18',
    currentStep: 'committee',
    progressPercentage: 65,
    documents: [],
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'Thesis Review Completed',
    message: 'Your supervisor has completed the initial review of your thesis.',
    type: 'success',
    read: false,
    createdAt: '2025-10-25T10:30:00',
    actionUrl: '/thesis/1',
  },
  {
    id: '2',
    userId: '1',
    title: 'Upcoming Deadline',
    message: 'Progress report submission deadline is in 3 days.',
    type: 'warning',
    read: false,
    createdAt: '2025-10-24T14:20:00',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    thesisId: '1',
    senderId: '2',
    senderName: 'Dr. Fatima Ali',
    content: 'Please revise the methodology section with more detailed explanations.',
    timestamp: '2025-10-20T09:15:00',
  },
  {
    id: '2',
    thesisId: '1',
    senderId: '1',
    senderName: 'Ahmed Hassan',
    content: 'Thank you for the feedback. I will update it by end of week.',
    timestamp: '2025-10-20T11:30:00',
  },
];

export const mockDefenseSchedules = [
  {
    id: 'd1',
    thesisId: '2',
    studentName: 'Sara Mohamed',
    title: 'Sustainable Energy Solutions for Urban Development',
    date: '2025-11-15',
    time: '14:00',
    location: 'Conference Hall A',
    type: 'final' as const,
    status: 'scheduled' as const,
    juryMembers: [
      { id: 'j1', name: 'Prof. Ahmed Mansour', role: 'president' as const, institution: 'Cairo University', status: 'confirmed' as const },
      { id: 'j2', name: 'Dr. Layla Ibrahim', role: 'rapporteur' as const, institution: 'Alexandria University', status: 'confirmed' as const },
      { id: 'j3', name: 'Dr. Karim Farouk', role: 'examiner' as const, institution: 'Ain Shams University', status: 'pending' as const },
    ],
  },
  {
    id: 'd2',
    thesisId: '1',
    studentName: 'Ahmed Hassan',
    title: 'Machine Learning Applications in Healthcare Diagnostics',
    date: '2025-12-10',
    time: '10:00',
    location: 'Virtual (Zoom)',
    type: 'proposal' as const,
    status: 'scheduled' as const,
    juryMembers: [
      { id: 'j4', name: 'Prof. Nadia Saleh', role: 'president' as const, institution: 'Cairo University', status: 'confirmed' as const },
      { id: 'j5', name: 'Dr. Youssef Adel', role: 'examiner' as const, institution: 'Cairo University', status: 'confirmed' as const },
    ],
  },
];

export const mockMeetings = [
  {
    id: 'm1',
    title: 'Weekly Supervision Meeting',
    participants: ['Ahmed Hassan', 'Dr. Fatima Ali'],
    date: '2025-10-28',
    time: '15:00',
    duration: 60,
    type: 'supervision' as const,
    link: 'https://meet.university.edu/weekly-ahmed',
  },
  {
    id: 'm2',
    title: 'Committee Review Session',
    participants: ['Sara Mohamed', 'Dr. Omar Khalil', 'Prof. Ahmed Mansour'],
    date: '2025-10-30',
    time: '11:00',
    duration: 90,
    type: 'committee' as const,
    location: 'Building 3, Room 205',
  },
];

export const mockResearchOutputs = [
  {
    id: 'ro1',
    thesisId: '1',
    title: 'Deep Learning for Medical Image Analysis: A Comprehensive Review',
    type: 'publication' as const,
    status: 'published' as const,
    date: '2025-09-01',
    venue: 'International Journal of Medical Informatics',
    doi: '10.1016/j.ijmedinf.2025.105234',
  },
  {
    id: 'ro2',
    thesisId: '1',
    title: 'Healthcare Diagnostic Dataset 2025',
    type: 'dataset' as const,
    status: 'published' as const,
    date: '2025-08-15',
    url: 'https://data.university.edu/hdd2025',
  },
  {
    id: 'ro3',
    thesisId: '2',
    title: 'Urban Energy Consumption Patterns in Egyptian Cities',
    type: 'publication' as const,
    status: 'under_review' as const,
    date: '2025-10-01',
    venue: 'Renewable Energy Journal',
  },
];

export const mockApprovalTasks = [
  {
    id: 'at1',
    thesisId: '1',
    taskName: 'Supervisor Initial Approval',
    assignedTo: '2',
    assignedToName: 'Dr. Fatima Ali',
    dueDate: '2025-11-01',
    status: 'pending' as const,
    priority: 'high' as const,
    comments: 'Review methodology chapter revisions',
  },
  {
    id: 'at2',
    thesisId: '2',
    taskName: 'Committee Final Review',
    assignedTo: '3',
    assignedToName: 'Prof. Ahmed Mansour',
    dueDate: '2025-11-05',
    status: 'approved' as const,
    priority: 'high' as const,
    completedDate: '2025-10-22',
  },
];
