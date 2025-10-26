import { MessageSquare, FileText, Video, Calendar, Send, Paperclip } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { mockMessages, mockMeetings, mockTheses } from '@/lib/mockData';
import { useAuth } from '@/contexts/AuthContext';

export const CollaborationView = () => {
  const { user } = useAuth();
  const userThesis = mockTheses.find(t => t.studentId === user?.id);
  const thesisMessages = mockMessages.filter(m => m.thesisId === userThesis?.id);
  const upcomingMeetings = mockMeetings.filter(m => 
    new Date(m.date) >= new Date()
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Collaboration Workspace</h2>
        <p className="text-muted-foreground">
          Communicate with your supervisor and track meetings
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Conversation with your supervisor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {thesisMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.senderId === user?.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-xs font-medium mb-1">{message.senderName}</p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Textarea
                placeholder="Type your message..."
                className="min-h-[80px]"
              />
              <div className="flex flex-col gap-2">
                <Button size="icon" variant="outline">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="p-3 rounded-lg border bg-card space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-sm">{meeting.title}</h4>
                    {meeting.link && (
                      <Video className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {meeting.duration} min
                  </Badge>
                  {meeting.link && (
                    <Button size="sm" className="w-full mt-2">
                      <Video className="h-3 w-3 mr-1" />
                      Join Meeting
                    </Button>
                  )}
                </div>
              ))}
              {upcomingMeetings.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No upcoming meetings
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Share Document
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="mr-2 h-4 w-4" />
                Start Video Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Document Activity</CardTitle>
          <CardDescription>Track document versions and changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userThesis?.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Version 2.0 • Uploaded {doc.uploadDate} by {doc.uploadedBy}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View Changes</Button>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
