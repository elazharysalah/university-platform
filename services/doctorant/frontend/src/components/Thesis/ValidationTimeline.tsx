import { Check, Clock, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ValidationStep } from '@/types/thesis';

interface ValidationTimelineProps {
  currentStep: ValidationStep | null;
}

const steps = [
  { id: 'supervisor', label: 'Supervisor Review', duration: '1-2 weeks' },
  { id: 'committee', label: 'Committee Approval', duration: '2-3 weeks' },
  { id: 'council', label: 'Scientific Council', duration: '1-2 weeks' },
];

export const ValidationTimeline = ({ currentStep }: ValidationTimelineProps) => {
  const getStepStatus = (stepId: string) => {
    const stepIndex = steps.findIndex(s => s.id === stepId);
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Validation Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            return (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      status === 'completed'
                        ? 'bg-primary text-primary-foreground'
                        : status === 'active'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {status === 'completed' ? (
                      <Check className="h-5 w-5" />
                    ) : status === 'active' ? (
                      <Clock className="h-5 w-5" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-0.5 h-12 my-1 ${
                        status === 'completed' ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{step.label}</h4>
                    <Badge variant={status === 'active' ? 'default' : 'secondary'}>
                      {status === 'completed' ? 'Completed' : status === 'active' ? 'In Progress' : 'Pending'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expected duration: {step.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
