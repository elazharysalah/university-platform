import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const Documents = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          Documents signés
        </h1>
        <p className="text-muted-foreground">Vos documents administratifs signés</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mes documents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-12">
            Aucun document disponible
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;
