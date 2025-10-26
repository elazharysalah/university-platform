import { FileText, Clock, CheckCircle, Calendar } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { mockTheses, mockNotifications } from '@/lib/mockData';

export const DashboardView = () => {
  const { user } = useAuth();
  const userThesis = mockTheses.find(t => t.studentId === user?.id);
  const recentNotifications = mockNotifications.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Here's an overview of your doctoral journey
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Thesis Progress"
          value={userThesis ? `${userThesis.progressPercentage}%` : '0%'}
          icon={FileText}
          description="Overall completion"
        />
        <StatsCard
          title="Pending Reviews"
          value={1}
          icon={Clock}
          description="Awaiting supervisor feedback"
        />
        <StatsCard
          title="Completed Milestones"
          value={3}
          icon={CheckCircle}
          description="Out of 7 total"
        />
        <StatsCard
          title="Days to Defense"
          value={45}
          icon={Calendar}
          description="Estimated date"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Thesis Status</CardTitle>
            <CardDescription>Track your submission progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {userThesis ? (
              <>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{userThesis.title}</span>
                    <Badge>{userThesis.status.replace('_', ' ')}</Badge>
                  </div>
                  <Progress value={userThesis.progressPercentage} />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Supervisor:</span>
                    <span className="font-medium">{userThesis.supervisorName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Submitted:</span>
                    <span className="font-medium">{userThesis.submissionDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Step:</span>
                    <span className="font-medium capitalize">{userThesis.currentStep}</span>
                  </div>
                </div>
                <Button className="w-full">View Full Details</Button>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No thesis submitted yet</p>
                <Button>Start New Submission</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Stay updated on your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  )}
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
