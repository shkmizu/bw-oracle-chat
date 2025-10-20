import { Sparkles, Star, Cloud } from "lucide-react";
import { QuickStartCard } from "./QuickStartCard";

interface HomeScreenProps {
  onCardClick: (message: string) => void;
}

export const HomeScreen = ({ onCardClick }: HomeScreenProps) => {
  const cards = [
    {
      icon: Sparkles,
      title: "Datadog Agent",
      description: "Como instalar o Datadog Agent em..",
      message: "Como instalar o Datadog Agent?"
    },
    {
      icon: Star,
      title: "Instrumentações",
      description: "Como fazer a instrumentação em..",
      message: "Como fazer a instrumentação?"
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Liberação de Usuários VPN",
      message: "Como liberar usuários VPN?"
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">Oracle</h2>
          <p className="text-muted-foreground">Ver 1.0 Out 20</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <QuickStartCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => onCardClick(card.message)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
