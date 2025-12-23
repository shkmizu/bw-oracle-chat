import { HelpCircle, Moon, Sun, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onClearChat?: () => void;
}

export const Navbar = ({ theme, onThemeToggle, onClearChat }: NavbarProps) => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Avents</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--status-active))]" />
            <span className="text-[13px] text-[hsl(var(--status-active))]">Ativo</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {onClearChat && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/60 hover:text-destructive hover:bg-muted transition-colors rounded-full"
              onClick={onClearChat}
              aria-label="Clear chat history"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/60 hover:text-foreground hover:bg-muted transition-colors rounded-full"
            onClick={() => window.open('https://drive.google.com/file/d/1RxSP671XriL7QHdipQjWFJxx10mwNcMh/view?usp=drive_link', '_blank')}
            aria-label="Help documentation"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/60 hover:text-foreground hover:bg-muted transition-colors rounded-full"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
