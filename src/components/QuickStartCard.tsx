import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QuickStartCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const QuickStartCard = ({ icon: Icon, title, description, onClick }: QuickStartCardProps) => {
  return (
    <Card 
      className="p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-border bg-card"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <div>
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>
  );
};
