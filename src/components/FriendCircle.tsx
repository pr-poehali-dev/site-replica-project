
interface FriendCircleProps {
  name: string;
  imageSrc: string;
}

const FriendCircle = ({ name, imageSrc }: FriendCircleProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs text-gray-600">{name}</span>
    </div>
  );
};

export default FriendCircle;
