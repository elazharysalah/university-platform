import { Upload, FileText, Download, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ValidationTimeline } from './ValidationTimeline';
import { ApprovalWorkflow } from './ApprovalWorkflow';
import { useAuth } from '@/contexts/AuthContext';
import { mockTheses } from '@/lib/mockData';

export const ThesisView = () => {
  const { user } = useAuth();
  const userThesis = mockTheses.find(t => t.studentId === user?.id);

  if (!userThesis) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Thesis Submitted</CardTitle>
          <CardDescription>Start your doctoral journey by submitting your thesis proposal</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Submit New Thesis
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Thesis</h2>
          <p className="text-muted-foreground">{userThesis.title}</p>
        </div>
        <Badge className="text-base px-4 py-2">
          {userThesis.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Thesis Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Student:</span>
                <span className="font-medium">{userThesis.studentName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Supervisor:</span>
                <span className="font-medium">{userThesis.supervisorName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Submission Date:</span>
                <span className="font-medium">{userThesis.submissionDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Updated:</span>
                <span className="font-medium">{userThesis.lastUpdated}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Supervisor
              </Button>
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Version
              </Button>
            </div>
          </CardContent>
        </Card>

        <ValidationTimeline currentStep={userThesis.currentStep} />
      </div>

      <ApprovalWorkflow thesisId={userThesis.id} />

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
          <CardDescription>All uploaded documents for this thesis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userThesis.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.size} • Uploaded {doc.uploadDate}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {userThesis.documents.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No documents uploaded yet
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
