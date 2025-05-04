
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: keyof typeof LucideIcons | string;
  fallback?: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ 
  name, 
  fallback = "CircleAlert", 
  color, 
  size = 24, 
  strokeWidth = 2,
  className,
  onClick,
}: IconProps) => {
  const IconComponent = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];
  
  if (!IconComponent) {
    console.warn(`Icon ${name} not found and fallback ${fallback} also not found`);
    return null;
  }
  
  return (
    <IconComponent 
      color={color} 
      size={size} 
      strokeWidth={strokeWidth}
      className={cn("", className)}
      onClick={onClick}
    />
  );
};

export default Icon;
