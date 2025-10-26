import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockAbsences } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { UserX } from 'lucide-react';

const Absences = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <UserX className="h-8 w-8 text-primary" />
          Absences
        </h1>
        <p className="text-muted-foreground">Consultation de vos absences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des absences</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Matière</TableHead>
                <TableHead>Séance</TableHead>
                <TableHead>Enseignant</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Justificatif</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAbsences.map((absence) => (
                <TableRow key={absence.id}>
                  <TableCell className="font-medium">{absence.subject}</TableCell>
                  <TableCell>{absence.session}</TableCell>
                  <TableCell>{absence.teacher}</TableCell>
                  <TableCell>{format(new Date(absence.date), 'd MMMM yyyy', { locale: fr })}</TableCell>
                  <TableCell>
                    {absence.justified ? (
                      <Badge variant="default">Justifiée</Badge>
                    ) : (
                      <Badge variant="destructive">Non justifiée</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Absences;
