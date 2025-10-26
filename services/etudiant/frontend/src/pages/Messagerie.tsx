import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Plus } from 'lucide-react';
import { mockMessages } from '@/lib/mockData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const Messagerie = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Mail className="h-8 w-8 text-primary" />
            Messagerie
          </h1>
          <p className="text-muted-foreground">Vos messages et notifications</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau message
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Messages reçus</CardTitle>
        </CardHeader>
        <CardContent>
          {mockMessages.length > 0 ? (
            <div className="space-y-4">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-4 rounded-lg border p-4 hover:bg-accent/10 cursor-pointer transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold">{message.subject}</p>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(message.date), 'd MMM yyyy', { locale: fr })}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">De: {message.from}</p>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {!message.read && (
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-12">
              Aucun message
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Messagerie;
