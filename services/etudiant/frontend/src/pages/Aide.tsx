import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Mail, Phone, MapPin } from 'lucide-react';

const Aide = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <HelpCircle className="h-8 w-8 text-primary" />
          Aide
        </h1>
        <p className="text-muted-foreground">Besoin d'assistance? Nous sommes là pour vous aider</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Questions fréquentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Comment justifier une absence?</h3>
              <p className="text-sm text-muted-foreground">
                Rendez-vous dans la section "Justificatifs d'absence" et déposez votre document justificatif (certificat médical, convocation, etc.).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Comment consulter mon emploi du temps?</h3>
              <p className="text-sm text-muted-foreground">
                L'emploi du temps est disponible sur la page d'accueil et dans la section "Agenda".
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Comment effectuer un paiement?</h3>
              <p className="text-sm text-muted-foreground">
                Cliquez sur "Créer" dans la section "Paiements" et suivez les instructions.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">scolarite@ensem.ac.ma</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Téléphone</p>
                <p className="text-sm text-muted-foreground">+212 5XX-XXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-sm text-muted-foreground">
                  École Nationale Supérieure d'Électricité et de Mécanique<br />
                  Casablanca, Maroc
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Support technique</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Pour toute assistance technique concernant la plateforme, veuillez contacter le service informatique:
          </p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">support.technique@ensem.ac.ma</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Aide;
