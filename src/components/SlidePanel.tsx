import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SlidePanel = ({ isOpen, onClose, title, children, className }: SlidePanelProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-5xl bg-background/95 backdrop-blur-md border-l shadow-2xl z-50 transition-all duration-500 ease-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/98 backdrop-blur-lg border-b border-border/50 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-accent/10 hover:text-accent transition-all duration-300 rounded-full h-10 w-10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-8 animate-fade-in">
          {children}
        </div>
      </div>
    </>
  );
};

export default SlidePanel;