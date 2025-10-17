export const TypingIndicator = () => {
  return (
    <div className="py-4 px-4 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-start">
          <div className="bg-muted rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="animate-typing-dots text-xl" style={{ animationDelay: '0s' }}>•</span>
              <span className="animate-typing-dots text-xl" style={{ animationDelay: '0.2s' }}>•</span>
              <span className="animate-typing-dots text-xl" style={{ animationDelay: '0.4s' }}>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
