import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockGrades } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { GraduationCap } from 'lucide-react';

const Notes = () => {
  const calculateAverage = (semester: number) => {
    const semesterGrades = mockGrades.filter(g => g.semester === semester);
    if (semesterGrades.length === 0) return 0;
    
    const totalPoints = semesterGrades.reduce((acc, grade) => acc + (grade.grade * grade.coefficient), 0);
    const totalCoef = semesterGrades.reduce((acc, grade) => acc + grade.coefficient, 0);
    
    return (totalPoints / totalCoef).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          Notes
        </h1>
        <p className="text-muted-foreground">Consultation de vos notes et moyennes</p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Moyenne 1er Semestre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {calculateAverage(1)}/20
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Moyenne 2ème Semestre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {calculateAverage(2)}/20
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Semester 1 */}
      <Card>
        <CardHeader>
          <CardTitle>1er Semestre</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Matière</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Coefficient</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockGrades.filter(g => g.semester === 1).map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell className="font-medium">{grade.subject}</TableCell>
                  <TableCell className="text-lg font-bold">{grade.grade}/20</TableCell>
                  <TableCell>{grade.coefficient}</TableCell>
                  <TableCell>{format(new Date(grade.date), 'd MMMM yyyy', { locale: fr })}</TableCell>
                  <TableCell>
                    {grade.grade >= 10 ? (
                      <Badge variant="default">Validée</Badge>
                    ) : (
                      <Badge variant="destructive">À rattraper</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Semester 2 */}
      <Card>
        <CardHeader>
          <CardTitle>2ème Semestre</CardTitle>
        </CardHeader>
        <CardContent>
          {mockGrades.filter(g => g.semester === 2).length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Matière</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Coefficient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockGrades.filter(g => g.semester === 2).map((grade) => (
                  <TableRow key={grade.id}>
                    <TableCell className="font-medium">{grade.subject}</TableCell>
                    <TableCell className="text-lg font-bold">{grade.grade}/20</TableCell>
                    <TableCell>{grade.coefficient}</TableCell>
                    <TableCell>{format(new Date(grade.date), 'd MMMM yyyy', { locale: fr })}</TableCell>
                    <TableCell>
                      {grade.grade >= 10 ? (
                        <Badge variant="default">Validée</Badge>
                      ) : (
                        <Badge variant="destructive">À rattraper</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Aucune note publiée pour le 2ème semestre
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Notes;
