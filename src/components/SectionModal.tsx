import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionModal = ({ isOpen, onClose, title, children, className }: SectionModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            "bg-background/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-border/50 w-full max-w-6xl max-h-[90vh] overflow-hidden animate-scale-in",
            className
          )}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-background/50 to-accent/5 border-b border-border/50 px-8 py-6 flex items-center justify-between">
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
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)] animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionModal;