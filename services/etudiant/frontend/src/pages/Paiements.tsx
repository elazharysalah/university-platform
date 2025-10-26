import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockPayments } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CreditCard, Plus, Eye } from 'lucide-react';

const Paiements = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge variant="default">Payé</Badge>;
      case 'pending':
        return <Badge variant="outline">En attente</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Annulé</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <CreditCard className="h-8 w-8 text-primary" />
            Paiements
          </h1>
          <p className="text-muted-foreground">Gestion de vos paiements</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Créer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des paiements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Référence</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Date de paiement</TableHead>
                <TableHead>Détail</TableHead>
                <TableHead>Justificatif</TableHead>
                <TableHead>État</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.reference}</TableCell>
                  <TableCell className="font-bold">{payment.amount} DH</TableCell>
                  <TableCell>{format(new Date(payment.date), 'd MMMM yyyy', { locale: fr })}</TableCell>
                  <TableCell>{payment.detail}</TableCell>
                  <TableCell>
                    {payment.justificationUrl ? (
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm">-</span>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(payment.status)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Modifier
                    </Button>
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

export default Paiements;
