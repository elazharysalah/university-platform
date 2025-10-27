import { Navigation } from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Calendar, 
  Users,
  Archive,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const DoctorantsPage = () => {
  const { toast } = useToast();
  
  const theses = [
    { 
      title: "Intelligence Artificielle et Apprentissage Automatique",
      student: "Ahmed Benali",
      supervisor: "Prof. Mohamed Alami",
      status: "En cours",
      progress: 65,
      nextDeadline: "Rapport trimestriel - 15 Déc 2025"
    },
    { 
      title: "Réseaux de neurones pour la vision par ordinateur",
      student: "Fatima Zahra",
      supervisor: "Prof. Sanae El Idrissi",
      status: "Validation",
      progress: 85,
      nextDeadline: "Soutenance - 20 Jan 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gestion Doctorale</h1>
          <p className="text-muted-foreground text-lg">
            Plateforme de gestion des thèses et soutenances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-6">
              <FileText className="h-8 w-8 mb-2 opacity-90" />
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm opacity-90">Thèses en cours</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary text-white">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 mb-2 opacity-90" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-90">Soutenances prévues</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 mb-2 text-secondary" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Thèses validées</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <Archive className="h-8 w-8 mb-2 text-accent" />
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-muted-foreground">Archive numérique</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Suivi des Thèses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {theses.map((thesis, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{thesis.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        👨‍🎓 {thesis.student}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        👨‍🏫 {thesis.supervisor}
                      </p>
                    </div>
                    <Badge variant={thesis.status === "En cours" ? "secondary" : "default"}>
                      {thesis.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-semibold">{thesis.progress}%</span>
                    </div>
                    <Progress value={thesis.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {thesis.nextDeadline}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => toast({
                      title: "Détails de la thèse",
                      description: `Ouverture des détails pour: ${thesis.title}`
                    })}
                  >
                    Voir détails
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Calendrier des Soutenances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-gradient-primary text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold">20</div>
                  <Badge variant="secondary">Janvier</Badge>
                </div>
                <p className="font-semibold mb-1">Soutenance de thèse</p>
                <p className="text-sm opacity-90">Fatima Zahra - Réseaux de neurones</p>
                <p className="text-sm opacity-90 mt-2">🕐 14:00 - Amphi A</p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold">15</div>
                  <Badge>Février</Badge>
                </div>
                <p className="font-semibold mb-1">Pré-soutenance</p>
                <p className="text-sm text-muted-foreground">Mohamed Alami - Data Science</p>
                <p className="text-sm text-muted-foreground mt-2">🕐 10:00 - Salle B12</p>
              </div>

              <Button 
                className="w-full bg-gradient-secondary"
                onClick={() => toast({
                  title: "Planification de soutenance",
                  description: "Ouverture du formulaire de planification..."
                })}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Planifier une soutenance
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-elevated transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Portail collaboratif</CardTitle>
            </CardHeader>
            <CardContent>
              <Users className="h-12 w-12 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-4">
                Communication entre doctorants, encadrants et jury
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast({
                  title: "Portail collaboratif",
                  description: "Accès au portail de communication..."
                })}
              >
                Accéder
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elevated transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Archivage numérique</CardTitle>
            </CardHeader>
            <CardContent>
              <Archive className="h-12 w-12 text-secondary mb-3" />
              <p className="text-sm text-muted-foreground mb-4">
                Recherche et consultation de la bibliothèque institutionnelle
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast({
                  title: "Archivage numérique",
                  description: "Ouverture de la bibliothèque institutionnelle..."
                })}
              >
                Explorer
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elevated transition-all">
            <CardHeader>
              <CardTitle className="text-lg">Workflow numérique</CardTitle>
            </CardHeader>
            <CardContent>
              <CheckCircle className="h-12 w-12 text-accent mb-3" />
              <p className="text-sm text-muted-foreground mb-4">
                Signatures et validations électroniques
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => toast({
                  title: "Workflow numérique",
                  description: "Accès au système de signatures électroniques..."
                })}
              >
                Gérer
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-l-4 border-l-accent">
          <CardContent className="p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Solution digitale mise en place</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Inscription et réinscription en ligne</li>
                <li>✓ Dossiers numériques remplaçant le format papier</li>
                <li>✓ Processus de validation accéléré (direction, comité, conseil scientifique)</li>
                <li>✓ Communication instantanée entre tous les acteurs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>

      <ChatWidget />
    </div>
  );
};

export default DoctorantsPage;
