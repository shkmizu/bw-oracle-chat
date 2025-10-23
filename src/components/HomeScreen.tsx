import { Server, Settings, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Moon, Sun, HelpCircle } from "lucide-react";

interface HomeScreenProps {
  onCardClick: (message: string) => void;
  theme?: string;
  onThemeToggle?: () => void;
}

export const HomeScreen = ({ onCardClick, theme, onThemeToggle }: HomeScreenProps) => {
  const quickActions = [
    {
      icon: Server,
      label: "Datadog Agent",
      topic: "Datadog Agent"
    },
    {
      icon: Settings,
      label: "Instrumentações",
      topic: "Instrumentações"
    },
    {
      icon: Cloud,
      label: "Cloud",
      topic: "Cloud"
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 animate-fade-in relative">
      {/* Theme Toggle and Help in top right */}
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open('https://drive.google.com/file/d/12JeBfMDv89EowxaS83qCubpBbpDSCAD2/view?usp=drive_link', '_blank')}
          className="rounded-full"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
        {onThemeToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>

      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        {/* Logo/Branding */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-3">
            BW Oráculo
          </h1>
          <p className="text-muted-foreground text-sm">Ver 1.0</p>
        </div>
        
        {/* Quick Action Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {quickActions.map((action) => (
            <Badge
              key={action.label}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
              onClick={() => onCardClick(action.topic)}
            >
              <action.icon className="h-4 w-4 mr-2" />
              {action.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
