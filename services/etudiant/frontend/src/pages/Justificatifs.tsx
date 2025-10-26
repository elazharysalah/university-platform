import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCheck, Upload } from 'lucide-react';

const Justificatifs = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileCheck className="h-8 w-8 text-primary" />
            Justificatifs d'absence
          </h1>
          <p className="text-muted-foreground">Gestion de vos justificatifs d'absence</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Déposer un justificatif
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mes justificatifs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-12">
            Aucun justificatif déposé
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Justificatifs;
