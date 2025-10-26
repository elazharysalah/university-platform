import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Upload } from 'lucide-react';

const PFE = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          Projet de Fin d'Études (PFE)
        </h1>
        <p className="text-muted-foreground">Gestion de votre projet de fin d'études</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations du PFE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Titre du projet</p>
                <p className="text-lg">Non défini</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Encadrant</p>
                <p className="text-lg">Non assigné</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Statut</p>
                <p className="text-lg">En attente</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Upload className="mr-2 h-4 w-4" />
              Déposer le rapport
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Upload className="mr-2 h-4 w-4" />
              Déposer la présentation
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Planning et jalons</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-12">
            Le planning sera disponible une fois le projet validé
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PFE;
