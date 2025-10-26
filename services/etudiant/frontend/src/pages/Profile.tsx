import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User } from 'lucide-react';

const Profile = () => {
  const { student } = useAuth();

  const getInitials = () => {
    if (!student) return 'U';
    return `${student.firstName[0]}${student.lastName[0]}`.toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <User className="h-8 w-8 text-primary" />
          Mon Profile
        </h1>
        <p className="text-muted-foreground">Gérez vos informations personnelles</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Photo de profil</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="h-32 w-32">
              <AvatarImage src={student?.avatarUrl} />
              <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              Changer la photo
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Prénom</Label>
                <Input value={student?.firstName} disabled />
              </div>
              <div className="space-y-2">
                <Label>Nom</Label>
                <Input value={student?.lastName} disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={student?.email} disabled />
            </div>
            <div className="space-y-2">
              <Label>Promotion</Label>
              <Input value={student?.promotion} disabled />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Modifier le mot de passe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Mot de passe actuel</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Nouveau mot de passe</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Mettre à jour le mot de passe</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
