
import { Card, CardContent } from "@/components/ui/card";

interface ProfileSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const ProfileSection = ({ title, subtitle, imageSrc }: ProfileSectionProps) => {
  return (
    <div className="bg-pastel-blue bubble p-4 max-w-xs">
      <div className="flex flex-col items-center">
        <h2 className="font-medium text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
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

export default ProfileSection;
