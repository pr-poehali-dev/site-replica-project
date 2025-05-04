
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InfoBubbleProps {
  backgroundColor?: string;
  children: ReactNode;
  className?: string;
}

const InfoBubble = ({ backgroundColor = "bg-white", children, className }: InfoBubbleProps) => {
  return (
    <div className={cn("speech-bubble", backgroundColor, className)}>
      {children}
    </div>
  );
};

export default InfoBubble;
