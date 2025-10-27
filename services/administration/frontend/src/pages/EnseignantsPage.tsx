import { Navigation } from "@/components/Navigation";
import { ChatWidget } from "@/components/ChatWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Clock, 
  Calendar,
  CreditCard,
  User,
  CheckCircle,
  XCircle
} from "lucide-react";

const EnseignantsPage = () => {
  const { toast } = useToast();
  
  const teachers = [
    {
      name: "Prof. Mohamed Alami",
      module: "Intelligence Artificielle",
      hours: "24h / 40h",
      availability: "Disponible",
      nextClass: "Lundi 14:00",
      payment: "Validé"
    },
    {
      name: "Prof. Sanae El Idrissi",
      module: "Machine Learning",
      hours: "32h / 35h",
      availability: "Occupé",
      nextClass: "Mardi 10:00",
      payment: "En attente"
    },
    {
      name: "Dr. Ahmed Benali",
      module: "Réseaux de Neurones",
      hours: "18h / 30h",
      availability: "Disponible",
      nextClass: "Mercredi 15:00",
      payment: "Validé"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gestion Enseignants</h1>
          <p className="text-muted-foreground text-lg">
            Modules, heures, planification et disponibilité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-6">
              <User className="h-8 w-8 mb-2 opacity-90" />
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm opacity-90">Enseignants actifs</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 mb-2 text-secondary" />
              <div className="text-2xl font-bold">28</div>
              <div className="text-sm text-muted-foreground">Modules assignés</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <Clock className="h-8 w-8 mb-2 text-accent" />
              <div className="text-2xl font-bold">1,240h</div>
              <div className="text-sm text-muted-foreground">Heures planifiées</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 mb-2 text-primary" />
              <div className="text-2xl font-bold">38</div>
              <div className="text-sm text-muted-foreground">Paiements validés</div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elevated mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Liste des Enseignants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teachers.map((teacher, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-primary text-white text-lg">
                            {teacher.name.split(" ").slice(-2).map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{teacher.name}</h3>
                          <p className="text-muted-foreground">{teacher.module}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={teacher.availability === "Disponible" ? "default" : "secondary"}
                      >
                        {teacher.availability}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Heures</p>
                          <p className="font-semibold">{teacher.hours}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <Calendar className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Prochain cours</p>
                          <p className="font-semibold">{teacher.nextClass}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="text-sm text-muted-foreground">Paiement</p>
                            <p className="font-semibold">{teacher.payment}</p>
                          </div>
                          {teacher.payment === "Validé" ? (
                            <CheckCircle className="h-4 w-4 text-secondary" />
                          ) : (
                            <XCircle className="h-4 w-4 text-destructive" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => toast({
                          title: "Planning",
                          description: `Affichage du planning de ${teacher.name}`
                        })}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Planning
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => toast({
                          title: "Modules",
                          description: `Gestion des modules de ${teacher.name}`
                        })}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        Modules
                      </Button>
                      <Button 
                        variant="default" 
                        className="flex-1"
                        onClick={() => toast({
                          title: "Modifier",
                          description: `Modification des informations de ${teacher.name}`
                        })}
                      >
                        Modifier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Planification des Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg bg-gradient-primary text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Intelligence Artificielle</span>
                    <Badge variant="secondary">Lundi 14:00</Badge>
                  </div>
                  <p className="text-sm opacity-90">Prof. Mohamed Alami - Amphi A</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Machine Learning</span>
                    <Badge>Mardi 10:00</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Prof. Sanae El Idrissi - Salle B12</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Réseaux de Neurones</span>
                    <Badge>Mercredi 15:00</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Dr. Ahmed Benali - Salle C05</p>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-gradient-secondary"
                onClick={() => toast({
                  title: "Nouvelle planification",
                  description: "Ouverture du formulaire de planification..."
                })}
              >
                Nouvelle planification
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Vérification des Paiements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Prof. Mohamed Alami</p>
                    <p className="text-sm text-muted-foreground">Octobre 2025 - 40h</p>
                  </div>
                  <Badge className="bg-secondary">Validé</Badge>
                </div>

                <div className="p-4 border rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Prof. Sanae El Idrissi</p>
                    <p className="text-sm text-muted-foreground">Octobre 2025 - 35h</p>
                  </div>
                  <Badge variant="outline" className="text-destructive border-destructive">
                    En attente
                  </Badge>
                </div>

                <div className="p-4 border rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Dr. Ahmed Benali</p>
                    <p className="text-sm text-muted-foreground">Octobre 2025 - 30h</p>
                  </div>
                  <Badge className="bg-secondary">Validé</Badge>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => toast({
                  title: "Historique des paiements",
                  description: "Affichage de l'historique complet..."
                })}
              >
                Voir l'historique complet
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <ChatWidget />
    </div>
  );
};

export default EnseignantsPage;
