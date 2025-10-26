import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarIcon } from 'lucide-react';

const Agenda = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <CalendarIcon className="h-8 w-8 text-primary" />
          Agenda
        </h1>
        <p className="text-muted-foreground">Votre calendrier académique</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Événements à venir</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-12">
            Aucun événement prévu
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Agenda;
