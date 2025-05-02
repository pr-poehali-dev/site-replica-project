
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fallback?: string;
}

const Icon = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  className,
  fallback = "CircleAlert",
  ...props
}: IconProps) => {
  // @ts-ignore - dynamic import
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

  return (
    <div className={cn("inline-flex", className)} {...props}>
      {LucideIcon && (
        <LucideIcon
          color={color}
          size={size}
          strokeWidth={strokeWidth}
          className="shrink-0"
        />
      )}
    </div>
  );
};

export default Icon;
