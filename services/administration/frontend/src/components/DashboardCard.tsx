import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  items?: string[];
  onClick?: () => void;
  gradient?: boolean;
}

export const DashboardCard = ({ title, icon: Icon, items, onClick, gradient }: DashboardCardProps) => {
  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 cursor-pointer",
        gradient && "bg-gradient-primary text-primary-foreground"
      )}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            gradient ? "bg-white/20" : "bg-primary/10"
          )}>
            <Icon className={cn("h-5 w-5", gradient ? "text-white" : "text-primary")} />
          </div>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      {items && items.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className={cn(
                "text-sm flex items-center gap-2",
                gradient ? "text-white/90" : "text-muted-foreground"
              )}>
                <div className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  gradient ? "bg-white/60" : "bg-primary/60"
                )} />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};
