import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Redirection si déjà authentifié
  if (isAuthenticated) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation de l'email
    const emailRegex = /^[a-z]+\.[a-z]+\.etu(23|24|00)@ensem\.ac\.ma$/;
    if (!emailRegex.test(email)) {
      setError('Format d\'email invalide. Utilisez: nom.prenom.etu00@ensem.ac.ma');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      setLoading(false);
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      toast.success('Connexion réussie!');
      navigate('/dashboard', { replace: true });
    } else {
      setError('Email ou mot de passe incorrect');
    }
    
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary p-4">
              <GraduationCap className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">ENSEM</CardTitle>
            <CardDescription className="text-base">
              École Nationale Supérieure d'Électricité et de Mécanique
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nom.prenom.etu00@ensem.ac.ma"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                required
                className="lowercase"
              />
              <p className="text-xs text-muted-foreground">
                Format: nom.prenom.etu[23|24|00]@ensem.ac.ma
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                  onClick={() => toast.info('Contactez l\'administration pour réinitialiser votre mot de passe')}
                >
                  Mot de passe oublié?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Pour tester: utilisez n'importe quel mot de passe avec un email valide
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
