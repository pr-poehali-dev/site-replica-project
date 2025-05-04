
import SearchBar from "@/components/SearchBar";
import SunflowerBrand from "@/components/SunflowerBrand";
import InfoBubble from "@/components/InfoBubble";
import ProfileCard from "@/components/ProfileCard";
import FriendCircle from "@/components/FriendCircle";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const friends = [
    { name: "antares", imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" },
    { name: "matanza", imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { name: "joshua", imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
    { name: "venus", imageSrc: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop" },
    { name: "dragon", imageSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-6">
          {/* Left Header: Info + Search */}
          <div>
            <InfoBubble backgroundColor="bg-[#ADD8E6]/60">
              <p className="text-xs mb-4">
                Neiva ama los girasoles con todo mi corazón. Les pediría si quieren el diseño a mis vintage?
              </p>
              <SearchBar />
            </InfoBubble>
          </div>

          {/* Right Header: Brand */}
          <div className="flex items-center justify-end">
            <SunflowerBrand />
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {/* Bio Text */}
          <div className="md:col-span-3">
            <InfoBubble backgroundColor="bg-[#F4F0DB]/70">
              <p className="text-xs">
                <span className="font-medium">Neiva O'Love</span>, también conocida por sus apodos (oh t'est, Luke Nano o Luna) es 
                una <span className="text-[#E8A87C]">streamer y modelo</span> Francesa de origen Japonés. Su interés por los 
                videojuegos y el entretenimiento surgió a sus <span className="font-medium">18 años</span>, cuando en medio de una 
                videollamada pasó a tener más de 7 personas mirando durante 
                24 horas jugando Genshin. Esto causó tanto gracia a los internautas que en 
                menos de un mes se alcanzó los 7 millones de seguidores.
              </p>
            </InfoBubble>
          </div>

          {/* Sunflower Phase */}
          <div className="md:col-span-2">
            <InfoBubble backgroundColor="bg-[#C6D8A4]/60" className="flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <p className="text-xs font-medium mb-0">arabella's got a</p>
                <p className="text-xs">sunflower faze</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551224817-643579473a19?w=100" 
                alt="Sunflower illustration" 
                className="w-20 h-20 object-contain animate-float my-2"
              />
            </InfoBubble>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Left Column */}
          <div>
            <ProfileCard 
              title="the sweetest girl" 
              subtitle="blossoms"
              imageSrc="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400"
              className="bg-[#F8DAD0]/50 h-full"
              imageClassName="h-48"
            />
          </div>

          {/* Middle Column */}
          <div>
            <InfoBubble backgroundColor="bg-[#F8EDD1]/70" className="h-full flex flex-col">
              <div className="text-center mb-2">
                <p className="text-xs font-medium">@neiva's got soul</p>
                <p className="text-xs text-gray-500">photographer, singer, baker, traveler</p>
                <p className="text-xs text-gray-500">and skater in the Americas</p>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-b53601012a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300"
                  alt="Skater girl" 
                  className="rounded-xl object-cover max-h-52"
                />
              </div>

              <div className="mt-2 flex justify-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full text-xs bg-white">
                  sigue subiendo fotos
                </Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs bg-white">
                  más ENG
                </Button>
              </div>
            </InfoBubble>
          </div>

          {/* Right Column */}
          <div>
            <ProfileCard 
              title="ᴡᴏɴᴅᴇʀʟᴀɴᴅ" 
              subtitle="real world"
              imageSrc="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=400"
              className="bg-[#D3E5EB]/50 h-full"
              imageClassName="h-48"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Bottom */}
          <div className="space-y-4">
            {/* Dog Info */}
            <InfoBubble backgroundColor="bg-[#F2D0A9]/70">
              <p className="text-xs mb-4">
                Hace referencia al significado de los tajos tribales y su conexión con tradiciones ancestrales. 
                El interés por el santo patriarcado va más allá de lo que hace el servicio médico.
              </p>
              
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=150&h=150&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </InfoBubble>

            {/* Flower Shower */}
            <div className="flex items-center gap-2">
              <Icon name="Flower" size={16} className="text-[#94af40]" />
              <span className="text-xs text-gray-500">flower shower</span>
            </div>

            {/* Friends */}
            <div className="bg-white bubble p-5">
              <h2 className="font-medium text-center mb-4 text-sm">neiva and her babies</h2>
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
          </div>

          {/* Right Bottom */}
          <div className="space-y-4">
            {/* Follow Section */}
            <InfoBubble backgroundColor="bg-[#FFF4D6]/70" className="flex">
              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-xs text-gray-500">you are the</span>
                <span className="text-xs text-gray-500">sunflower</span>
                <Button size="sm" className="rounded-full mt-2 bg-[#F3CA40] text-white border-none hover:bg-[#E6B800]">
                  <Icon name="Heart" size={14} className="mr-1" />
                  follow neiva in all of her social media
                </Button>
              </div>
              <div className="flex-1 text-right">
                <img 
                  src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=100&fit=crop" 
                  alt="Emoji sunflowers" 
                  className="w-20 ml-auto"
                />
              </div>
            </InfoBubble>

            {/* Streetsask Girl */}
            <InfoBubble backgroundColor="bg-[#FFF4D6]/70" className="flex flex-col h-64">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300" 
                  alt="Girl with phone" 
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium">I'm the streetsask girl in town</h3>
                <p className="text-xs text-gray-500">so why are you so mean?</p>
                <p className="text-xs text-gray-400 mt-2">
                  El traté es todo, nada más ay la transforme de mes frases significó dos te estabas. Todo es falso?
                </p>
              </div>
              <div className="mt-auto flex justify-between text-xs text-gray-400">
                <span>@livetime</span>
                <span>07 OCT 2023</span>
              </div>
            </InfoBubble>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mt-8 mb-4">
          <p>take a chill vibe</p>
          <p>handmade with love</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
