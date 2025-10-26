import { CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockApprovalTasks } from '@/lib/mockData';

interface ApprovalWorkflowProps {
  thesisId: string;
}

export const ApprovalWorkflow = ({ thesisId }: ApprovalWorkflowProps) => {
  const tasks = mockApprovalTasks.filter(t => t.thesisId === thesisId);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-primary" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-warning" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-destructive" />;
      case 'revision_requested':
        return <AlertCircle className="h-5 w-5 text-warning" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval Workflow</CardTitle>
        <CardDescription>Track validation progress and pending actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                {getStatusIcon(task.status)}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{task.taskName}</h4>
                      <p className="text-sm text-muted-foreground">
                        Assigned to: {task.assignedToName}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <Badge variant={task.status === 'approved' ? 'default' : 'secondary'}>
                        {task.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                    {task.completedDate && (
                      <span className="text-primary">
                        Completed: {new Date(task.completedDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {task.comments && (
                    <div className="p-3 bg-muted rounded-md">
                      <p className="text-sm">{task.comments}</p>
                    </div>
                  )}

                  {task.status === 'pending' && (
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        Send Reminder
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No approval tasks yet
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
