import { Search, Filter, BookOpen, Download, Eye, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { mockTheses, mockResearchOutputs } from '@/lib/mockData';

export const ArchiveView = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Thesis Archive</h2>
        <p className="text-muted-foreground">
          Institutional repository and research output management
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search by title, author, or keywords..."
                className="w-full"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Research Outputs</CardTitle>
            <CardDescription>Publications, datasets, and presentations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockResearchOutputs.map((output) => (
                <div
                  key={output.id}
                  className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {output.type}
                        </Badge>
                        <Badge 
                          variant={output.status === 'published' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {output.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold mb-1">{output.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {output.venue && `${output.venue} • `}
                        {new Date(output.date).toLocaleDateString()}
                      </p>
                      {output.doi && (
                        <p className="text-xs text-muted-foreground mt-1">
                          DOI: {output.doi}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {output.url && (
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Theses</CardTitle>
            <CardDescription>Browse institutional thesis archive</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockTheses.map((thesis) => (
                <div
                  key={thesis.id}
                  className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{thesis.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {thesis.studentName} • Supervised by {thesis.supervisorName}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {thesis.status.replace('_', ' ')}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Submitted: {thesis.submissionDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Archive Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Theses:</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">This Year:</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Downloads:</span>
                  <span className="font-semibold">1,842</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Research Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Publications:</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Citations:</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">H-Index:</span>
                  <span className="font-semibold">18</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Access Control</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Public Access:</span>
                  <span className="font-semibold">198</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Restricted:</span>
                  <span className="font-semibold">34</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Embargoed:</span>
                  <span className="font-semibold">15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
