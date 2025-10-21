import { HelpCircle, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const Navbar = ({ theme, onThemeToggle }: NavbarProps) => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">BW Oráculo</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--status-active))]" />
            <span className="text-[13px] text-[hsl(var(--status-active))]">Ativo</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => window.open('https://drive.google.com/file/d/12JeBfMDv89EowxaS83qCubpBbpDSCAD2/view?usp=drive_link', '_blank')}
            aria-label="Help documentation"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
