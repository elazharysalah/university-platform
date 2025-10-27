import { useNavigate } from "react-router-dom";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  CreditCard,
  FileText,
  Clock,
  Archive,
  MessageSquare,
  Settings
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { DashboardCard } from "@/components/DashboardCard";
import { ChatWidget } from "@/components/ChatWidget";

const Dashboard = () => {
  const navigate = useNavigate();

  const adminModules = [
    {
      title: "Gestion Enseignants",
      icon: Users,
      items: ["Modules et heures", "Planification", "Disponibilité"],
      path: "/enseignants"
    },
    {
      title: "Gestion Doctorants",
      icon: GraduationCap,
      items: ["Inscriptions", "Suivi des thèses", "Soutenances"],
      path: "/doctorants"
    },
    {
      title: "Gestion Étudiants",
      icon: BookOpen,
      items: ["Absences", "Notes", "Demandes"],
      path: "/etudiants"
    },
    {
      title: "Calendrier des soutenances",
      icon: Calendar,
      items: ["Planning", "Réservations", "Notifications"]
    },
    {
      title: "Vérification Paiements",
      icon: CreditCard,
      items: ["Suivi paiements", "Historique", "Rapports"]
    },
    {
      title: "Portail collaboratif",
      icon: MessageSquare,
      items: ["Communication", "Notifications", "Documents partagés"]
    },
    {
      title: "Accepter les thèses",
      icon: FileText,
      items: ["Validation", "Révisions", "Approbation"]
    },
    {
      title: "Archivage numérique",
      icon: Archive,
      items: ["Recherche", "Bibliothèque", "Conservation"]
    },
    {
      title: "Signature & Validation",
      icon: FileText,
      items: ["Workflow numérique", "Signatures", "Validations"]
    },
    {
      title: "Chatbot & Configuration",
      icon: Settings,
      items: ["Configuration IA", "Réponses automatiques", "FAQ"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tableau de bord Administration</h1>
          <p className="text-muted-foreground text-lg">
            Gérez tous les aspects de votre établissement académique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((module, index) => (
            <DashboardCard
              key={index}
              title={module.title}
              icon={module.icon}
              items={module.items}
              onClick={() => module.path && navigate(module.path)}
              gradient={index < 3}
            />
          ))}
        </div>
      </main>

      <ChatWidget />
    </div>
  );
};

export default Dashboard;
