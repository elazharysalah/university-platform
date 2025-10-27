import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Gestion Enseignants",
      description: "Modules, heures, planification et paiements",
      icon: Users,
      path: "/enseignants",
      color: "bg-gradient-primary"
    },
    {
      title: "Gestion Doctorants",
      description: "Thèses, soutenances et archivage numérique",
      icon: GraduationCap,
      path: "/doctorants",
      color: "bg-gradient-secondary"
    },
    {
      title: "Gestion Étudiants",
      description: "Absences, notes, documents et demandes",
      icon: BookOpen,
      path: "/etudiants",
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AcadémiaHub
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Plateforme de Gestion Académique</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Bienvenue sur{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AcadémiaHub
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solution complète de gestion pour les établissements académiques.
            Automatisez vos processus et améliorez la collaboration.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Button 
            onClick={() => navigate("/dashboard")}
            size="lg"
            className="w-full md:w-auto bg-gradient-primary hover:scale-105 transition-transform text-lg px-8 py-6 shadow-elevated"
          >
            <GraduationCap className="h-5 w-5 mr-2" />
            Accéder au Tableau de Bord
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
              onClick={() => navigate(role.path)}
            >
              <div className={`h-2 ${role.color} group-hover:h-4 transition-all duration-300`} />
              <CardContent className="p-8 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-2xl ${role.color} group-hover:scale-110 transition-transform`}>
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl">{role.title}</h3>
                <p className="text-muted-foreground">{role.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Accéder
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-elevated border-l-4 border-l-primary">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-4">🚀 Fonctionnalités principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-semibold">Gestion des modules et heures</p>
                    <p className="text-sm text-muted-foreground">Planification et suivi en temps réel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <p className="font-semibold">Suivi des thèses</p>
                    <p className="text-sm text-muted-foreground">Workflow numérique complet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-semibold">Gestion des absences</p>
                    <p className="text-sm text-muted-foreground">Suivi automatisé avec photos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-semibold">Chat en direct</p>
                    <p className="text-sm text-muted-foreground">Communication instantanée</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
