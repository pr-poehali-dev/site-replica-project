
interface FriendCircleProps {
  name: string;
  imageSrc: string;
}

const FriendCircle = ({ name, imageSrc }: FriendCircleProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="friend-circle">
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
