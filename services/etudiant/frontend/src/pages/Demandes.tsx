import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, Plus } from 'lucide-react';

const Demandes = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ClipboardList className="h-8 w-8 text-primary" />
            Demandes
          </h1>
          <p className="text-muted-foreground">Gestion de vos demandes administratives</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle demande
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mes demandes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-12">
            Aucune demande en cours
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Demandes;
