
import FriendCircle from "./FriendCircle";

const FriendsSection = () => {
  const friends = [
    { name: "анастасия", imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" },
    { name: "михаил", imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { name: "дарья", imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
    { name: "алексей", imageSrc: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop" },
    { name: "софия", imageSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="bg-white bubble p-5 max-w-xl">
      <h2 className="font-medium text-center mb-4">неля и ее друзья</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {friends.map((friend) => (
          <FriendCircle 
            key={friend.name}
            name={friend.name}
            imageSrc={friend.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
