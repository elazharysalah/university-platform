import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Folder, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockAbsences, mockExams, mockGrades, mockSchedule } from '@/lib/mockData';
import { format, addWeeks, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AIChatBot from '@/components/AIChatBot';

const Dashboard = () => {
  const { student } = useAuth();
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const currentDate = format(new Date(), "d MMMM yyyy", { locale: fr });
  
  const weekDays = eachDayOfInterval({
    start: currentWeekStart,
    end: endOfWeek(currentWeekStart, { weekStartsOn: 1 })
  }).slice(0, 5); // Only weekdays

  const timeSlots = [
    '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const getScheduleForDay = (dayIndex: number) => {
    return mockSchedule.filter(item => item.day === dayIndex);
  };

  const getEventStyle = (startTime: string, endTime: string) => {
    const startIndex = timeSlots.indexOf(startTime);
    const endIndex = timeSlots.indexOf(endTime);
    if (startIndex === -1 || endIndex === -1) return { top: 0, height: 0 };
    
    const top = (startIndex * 40);
    const height = ((endIndex - startIndex) * 40);
    return { top, height };
  };

  const getEventColor = (type: string) => {
    const colors = {
      cours: 'bg-purple-200 border-purple-300',
      td: 'bg-green-200 border-green-300',
      tp: 'bg-blue-200 border-blue-300',
      exam: 'bg-yellow-200 border-yellow-300'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-200 border-gray-300';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            {/* Student Info */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                {student?.firstName?.[0]}{student?.lastName?.[0]}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bienvenue,</p>
                <h1 className="text-xl font-bold text-foreground">
                  {student?.firstName} {student?.lastName}
                </h1>
              </div>
            </div>
            
            {/* Right Info */}
            <div className="text-right text-sm space-y-1">
              <p className="text-muted-foreground">{currentDate}</p>
              <p className="text-muted-foreground">Vous avez 0 messages</p>
              <p className="text-muted-foreground">Vous avez 0 alertes</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        {/* Left Column - Schedule */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Mes groupes:</h2>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Mon emploi du temps</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setCurrentWeekStart(addWeeks(currentWeekStart, -1))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setCurrentWeekStart(addWeeks(currentWeekStart, 1))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Week Header */}
              <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-px bg-border mb-px">
                <div className="bg-muted p-2"></div>
                {weekDays.map((day, idx) => (
                  <div key={idx} className="bg-muted p-2 text-center">
                    <div className="font-medium text-sm">
                      {format(day, 'EEE', { locale: fr })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {format(day, 'd/MM')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Grid */}
              <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-px bg-border relative">
                {/* Time Column */}
                <div className="bg-background">
                  {timeSlots.map((time, idx) => (
                    <div key={idx} className="h-10 flex items-center justify-center text-xs text-muted-foreground border-t">
                      {time}
                    </div>
                  ))}
                </div>

                {/* Days Columns */}
                {weekDays.map((day, dayIdx) => {
                  const daySchedule = getScheduleForDay(dayIdx + 1);
                  return (
                    <div key={dayIdx} className="bg-background relative">
                      {timeSlots.map((_, idx) => (
                        <div key={idx} className="h-10 border-t"></div>
                      ))}
                      
                      {/* Events */}
                      {daySchedule.map((event) => {
                        const style = getEventStyle(event.startTime, event.endTime);
                        return (
                          <div
                            key={event.id}
                            className={`absolute left-0 right-0 mx-0.5 rounded border ${getEventColor(event.type)} p-1 text-xs overflow-hidden`}
                            style={{ top: `${style.top}px`, height: `${style.height}px` }}
                          >
                            <div className="font-medium text-[10px] leading-tight">{event.startTime} - {event.endTime}</div>
                            <div className="font-semibold text-[11px] leading-tight">{event.subject}</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">{event.type.toUpperCase()}</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">{event.teacher}</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">{event.room}</div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Authorized Subjects */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Matières non autorisées à l'examen en session normale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-2 font-medium">Libellé seule</th>
                    <th className="text-left p-2 font-medium">Taux seule</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-xs">
                  <tr className="border-t">
                    <td colSpan={2} className="p-4 text-center">Aucune matière non autorisée</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Recent Absences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Folder className="h-5 w-5 text-yellow-600" />
              Dernières absences non justifiées
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockAbsences.filter(a => !a.justified).length > 0 ? (
              <div className="space-y-2">
                {mockAbsences.filter(a => !a.justified).slice(0, 3).map((absence) => (
                  <div key={absence.id} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <Folder className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{absence.subject}</p>
                      <p className="text-xs text-muted-foreground">{format(new Date(absence.date), 'd/MM/yyyy', { locale: fr })} {absence.session}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Aucune absence non justifiée</p>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Calendar className="h-5 w-5 text-orange-600" />
              Prochains examens
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockExams.length > 0 ? (
              <div className="space-y-2">
                {mockExams.slice(0, 5).map((exam) => (
                  <div key={exam.id} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <Calendar className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{exam.subject}</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(exam.date), 'd/MM/yyyy', { locale: fr })} {exam.time} - {exam.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Aucun examen prévu</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="h-5 w-5 text-primary" />
              Dernières notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Aucune note prof publiée</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Bot */}
      <AIChatBot />
    </div>
  );
};

export default Dashboard;
