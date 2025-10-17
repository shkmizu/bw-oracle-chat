import { Moon, Sun, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export const Navbar = ({ theme, onThemeToggle }: NavbarProps) => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">BW Oracle</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--status-active))] animate-pulse" />
            <span className="text-sm text-[hsl(var(--status-active))]">Ativo</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onThemeToggle}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <div className="w-6 h-6 rounded bg-foreground text-background flex items-center justify-center text-xs font-bold">
              US
            </div>
            <span className="text-sm">Usuário</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
