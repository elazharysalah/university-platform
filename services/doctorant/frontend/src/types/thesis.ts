export type UserRole = 'student' | 'supervisor' | 'admin' | 'jury';

export type ThesisStatus = 
  | 'draft' 
  | 'submitted' 
  | 'under_review' 
  | 'approved_supervisor'
  | 'approved_committee'
  | 'approved_council'
  | 'defense_scheduled'
  | 'defended'
  | 'archived';

export type ValidationStep = 'supervisor' | 'committee' | 'council';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Thesis {
  id: string;
  title: string;
  studentId: string;
  studentName: string;
  supervisorId: string;
  supervisorName: string;
  status: ThesisStatus;
  submissionDate: string;
  lastUpdated: string;
  currentStep: ValidationStep | null;
  progressPercentage: number;
  documents: ThesisDocument[];
}

export interface ThesisDocument {
  id: string;
  thesisId: string;
  name: string;
  type: 'thesis' | 'report' | 'approval' | 'other';
  uploadDate: string;
  size: string;
  uploadedBy: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface Message {
  id: string;
  thesisId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  attachments?: string[];
}

export interface DefenseSchedule {
  id: string;
  thesisId: string;
  studentName: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'proposal' | 'final';
  status: 'scheduled' | 'completed' | 'cancelled';
  juryMembers: JuryMember[];
}

export interface JuryMember {
  id: string;
  name: string;
  role: 'president' | 'examiner' | 'rapporteur';
  institution: string;
  status: 'confirmed' | 'pending' | 'declined';
}

export interface Meeting {
  id: string;
  title: string;
  participants: string[];
  date: string;
  time: string;
  duration: number;
  type: 'supervision' | 'committee' | 'virtual';
  link?: string;
  notes?: string;
}

export interface ResearchOutput {
  id: string;
  thesisId: string;
  title: string;
  type: 'publication' | 'dataset' | 'presentation' | 'patent';
  status: 'published' | 'under_review' | 'draft';
  date: string;
  venue?: string;
  doi?: string;
  url?: string;
}

export interface ApprovalTask {
  id: string;
  thesisId: string;
  taskName: string;
  assignedTo: string;
  assignedToName: string;
  dueDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'revision_requested';
  priority: 'high' | 'medium' | 'low';
  comments?: string;
  completedDate?: string;
}
