import { Calendar, Clock, MapPin, Users, Video, Plus, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockDefenseSchedules } from '@/lib/mockData';

export const DefenseCalendarView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Defense Calendar</h2>
          <p className="text-muted-foreground">Manage defense schedules and jury coordination</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Defense
        </Button>
      </div>

      <div className="grid gap-6">
        {mockDefenseSchedules.map((defense) => (
          <Card key={defense.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{defense.title}</CardTitle>
                  <CardDescription>Student: {defense.studentName}</CardDescription>
                </div>
                <Badge variant={defense.status === 'scheduled' ? 'default' : 'secondary'}>
                  {defense.type === 'final' ? 'Final Defense' : 'Proposal Defense'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(defense.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-muted-foreground">{defense.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {defense.location.includes('Virtual') ? (
                    <Video className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{defense.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Jury Status</p>
                    <p className="text-sm text-muted-foreground">
                      {defense.juryMembers.filter(j => j.status === 'confirmed').length} / {defense.juryMembers.length} confirmed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Jury Members</h4>
                <div className="space-y-2">
                  {defense.juryMembers.map((jury) => (
                    <div
                      key={jury.id}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card"
                    >
                      <div className="flex items-center gap-3">
                        {jury.status === 'confirmed' ? (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        ) : jury.status === 'pending' ? (
                          <Clock className="h-5 w-5 text-warning" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" />
                        )}
                        <div>
                          <p className="font-medium">{jury.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {jury.role.charAt(0).toUpperCase() + jury.role.slice(1)} • {jury.institution}
                          </p>
                        </div>
                      </div>
                      <Badge variant={jury.status === 'confirmed' ? 'default' : 'secondary'}>
                        {jury.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Send Reminder</Button>
                <Button variant="outline" className="flex-1">Edit Schedule</Button>
                <Button className="flex-1">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
