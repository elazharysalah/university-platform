import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      toast({ title: 'Login successful', description: 'Welcome back!' });
      navigate('/');
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }
  };

  const quickLogin = (role: string) => {
    const credentials = {
      student: { email: 'ahmed.hassan@university.edu', password: 'demo' },
      supervisor: { email: 'fatima.ali@university.edu', password: 'demo' },
      admin: { email: 'admin@university.edu', password: 'demo' },
    }[role];
    
    if (credentials) {
      setEmail(credentials.email);
      setPassword(credentials.password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">D</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Doctoral Services Platform</CardTitle>
          <CardDescription className="text-center">
            Sign in to manage your doctoral journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Demo Accounts
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => quickLogin('student')}
              >
                <Badge variant="secondary" className="mr-2">Student</Badge>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => quickLogin('supervisor')}
              >
                <Badge variant="secondary" className="mr-2">Supervisor</Badge>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => quickLogin('admin')}
              >
                <Badge variant="secondary" className="mr-2">Admin</Badge>
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              Click a role to auto-fill credentials for demo purposes
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
