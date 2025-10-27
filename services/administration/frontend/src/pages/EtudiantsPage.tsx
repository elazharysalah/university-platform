import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  Home, 
  UserCheck, 
  FileText, 
  GraduationCap,
  CreditCard,
  Calendar,
  MessageSquare,
  HelpCircle,
  ClipboardCheck
} from "lucide-react";

const EtudiantsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const modules = [
    { icon: Home, title: "Accueil", color: "bg-primary" },
    { icon: UserCheck, title: "Absences", color: "bg-secondary" },
    { icon: FileText, title: "Documents signés", color: "bg-accent" },
    { icon: ClipboardCheck, title: "Notes", color: "bg-primary" },
    { icon: FileText, title: "Demandes", color: "bg-secondary" },
    { icon: GraduationCap, title: "PFE", color: "bg-accent" },
    { icon: CreditCard, title: "Paiement", color: "bg-primary" },
    { icon: Calendar, title: "Agenda", color: "bg-secondary" },
    { icon: MessageSquare, title: "Messagerie", color: "bg-accent" },
    { icon: HelpCircle, title: "Aide", color: "bg-primary" }
  ];

  const students = [
    { id: 1, name: "Ahmed Benali", photo: "", status: "Présent", lastUpdate: "Il y a 2h" },
    { id: 2, name: "Fatima Zahra", photo: "", status: "Présent", lastUpdate: "Il y a 1h" },
    { id: 3, name: "Mohamed Alami", photo: "", status: "Absent", lastUpdate: "Il y a 30min" },
    { id: 4, name: "Sanae El Idrissi", photo: "", status: "Présent", lastUpdate: "Il y a 45min" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gestion Étudiants</h1>
          <p className="text-muted-foreground text-lg">
            Portail unifié pour la gestion des étudiants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => toast({
                title: module.title,
                description: `Accès au module ${module.title}...`
              })}
            >
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className={`${module.color} p-3 rounded-lg`}>
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold">{module.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Gestion des Absences
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              ⏱️ Délai de modification: 48 heures après le cours
            </p>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Rechercher un étudiant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-card transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={student.photo} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.lastUpdate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={student.status === "Présent" ? "default" : "destructive"}
                    >
                      {student.status}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const hoursSince = parseInt(student.lastUpdate.match(/\d+/)?.[0] || "0");
                        if (hoursSince > 48) {
                          toast({
                            title: "Modification impossible",
                            description: "Le délai de 48h est dépassé",
                            variant: "destructive"
                          });
                        } else {
                          toast({
                            title: "Modification du statut",
                            description: `Modification pour ${student.name}...`
                          });
                        }
                      }}
                    >
                      Modifier
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">📄 Justificatifs d'absence</h4>
              <p className="text-sm text-muted-foreground">
                Les justificatifs doivent être soumis dans les 48 heures suivant l'absence
              </p>
              <Button 
                className="mt-3" 
                variant="secondary"
                onClick={() => toast({
                  title: "Soumettre un justificatif",
                  description: "Ouverture du formulaire de soumission..."
                })}
              >
                Soumettre un justificatif
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <ChatWidget />
    </div>
  );
};

export default EtudiantsPage;
