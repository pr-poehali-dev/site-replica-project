
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  className?: string;
  imageClassName?: string;
  titlePosition?: 'top' | 'bottom';
}

const ProfileCard = ({ 
  title, 
  subtitle,
  description, 
  imageSrc, 
  className,
  imageClassName,
  titlePosition = 'top' 
}: ProfileCardProps) => {
  return (
    <div className={cn("bubble p-4 overflow-hidden", className)}>
      {titlePosition === 'top' && (
        <div className="mb-3 text-center">
          <h2 className="font-medium text-sm">{title}</h2>
          {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
        </div>
      )}
      
      <div className="overflow-hidden rounded-2xl">
        <img 
          src={imageSrc} 
          alt={title} 
          className={cn("object-cover w-full", imageClassName)}
        />
      </div>
      
      {description && (
        <p className="text-xs text-gray-600 mt-2">{description}</p>
      )}
      
      {titlePosition === 'bottom' && (
        <div className="mt-3 text-center">
          <h2 className="font-medium text-sm">{title}</h2>
          {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
