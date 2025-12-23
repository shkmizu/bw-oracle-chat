import { Moon, Sun, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
            <TooltipProvider>
              <Tooltip>
                <AlertDialog>
                  <TooltipTrigger asChild>
                    <AlertDialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-foreground/60 hover:text-foreground hover:bg-muted transition-colors rounded-full"
                        aria-label="New chat"
                      >
                        <MessageSquarePlus className="h-5 w-5" />
                      </Button>
                    </AlertDialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Nova conversa (Ctrl+Shift+L)</p>
                  </TooltipContent>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Iniciar nova conversa?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Isso irá limpar todo o histórico da conversa atual. Esta ação não pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={onClearChat}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Tooltip>
            </TooltipProvider>
          )}
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
