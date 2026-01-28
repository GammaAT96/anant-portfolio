import { cn } from "@/lib/utils";

interface SparkleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Sparkle = ({ className, size = "md" }: SparkleProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  return (
    <svg
      className={cn(sizeClasses[size], "text-primary", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};

export const SparkleGroup = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <Sparkle 
        size="lg" 
        className="absolute top-0 right-0 animate-sparkle opacity-60" 
      />
      <Sparkle 
        size="sm" 
        className="absolute top-8 right-12 animate-sparkle animation-delay-400 opacity-40" 
      />
      <Sparkle 
        size="md" 
        className="absolute -top-4 right-16 animate-sparkle animation-delay-800 opacity-50" 
      />
    </div>
  );
};

export default Sparkle;
