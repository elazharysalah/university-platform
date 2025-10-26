import { useState } from 'react';
import { Header } from '@/components/Layout/Header';
import { Sidebar } from '@/components/Layout/Sidebar';
import { DashboardView } from '@/components/Dashboard/DashboardView';
import { ThesisView } from '@/components/Thesis/ThesisView';
import { CollaborationView } from '@/components/Collaboration/CollaborationView';
import { DefenseCalendarView } from '@/components/Defense/DefenseCalendarView';
import { ArchiveView } from '@/components/Archive/ArchiveView';
import { SettingsView } from '@/components/Settings/SettingsView';
import { useAuth } from '@/contexts/AuthContext';
import { LoginPage } from '@/components/Auth/LoginPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'thesis':
        return <ThesisView />;
      case 'collaboration':
        return <CollaborationView />;
      case 'defense':
        return <DefenseCalendarView />;
      case 'archive':
        return <ArchiveView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 ml-64 p-8 pt-6">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default Index;
