
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  className?: string;
}

const ProfileCard = ({ title, subtitle, imageSrc, className }: ProfileCardProps) => {
  return (
    <div className={cn("bubble p-4 max-w-xs", className)}>
      <div className="flex flex-col items-center">
        <h2 className="font-medium text-sm mb-1">{title}</h2>
        <p className="text-xs text-gray-600 mb-3">{subtitle}</p>
        <div className="overflow-hidden rounded-2xl">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-cover w-full h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
