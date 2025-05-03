
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import SunflowerBrand from "@/components/SunflowerBrand";
import FriendsSection from "@/components/FriendsSection";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-4">
            <div className="bg-[#ADD8E6]/60 bubble p-4">
              <p className="text-xs mb-3">Neiva ama los girasoles con todo mi corazón. Les pediría si quieren el diseño a mis vintage?</p>
              <SearchBar />
            </div>
          </div>
          <SunflowerBrand />
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-[#D8F0E0]/70 speech-bubble max-w-md flex-1">
            <p className="text-xs p-1">
              Neiva O'Love, también conocida por sus apodos (oh t'est, Luke Nano o Luna) es 
              una streamer y modelo Francesa de origen Japonés. Su interés por los 
              videojuegos y el entretenimiento surgió a sus 18 años, cuando en medio de una 
              videollamada pasó a tener más de 7 personas mirando durante 
              24 horas jugando Genshin. Esto causó tanto gracia a los internautas que en 
              menos de un mes se alcanzó los 7 millones de seguidores.
            </p>
          </div>
          
          <div className="bg-[#E9D2C0]/70 speech-bubble text-center p-2 flex-none">
            <span className="text-xs font-medium">arabella's got a</span><br/>
            <span className="text-xs">sunflower faze</span>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ProfileCard 
            title="the sweetest girl" 
            subtitle="blossoms"
            imageSrc="https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400"
            className="bg-[#F0E6D8]/70"
          />
          
          <div className="flex flex-col justify-center items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1551224817-643579473a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100" 
              alt="Sunflower drawing" 
              className="w-24"
            />
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full text-xs bg-white">
                sigue subiendo fotos
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs bg-white">
                más ENG
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <span>flower shower</span>
              <Icon name="Flower" size={16} />
            </div>
          </div>
          
          <ProfileCard 
            title="ᴡᴏɴᴅᴇʀʟᴀɴᴅ" 
            subtitle="real world"
            imageSrc="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400"
            className="bg-[#F5D0D0]/70"
          />
        </div>
        
        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-4">
            <div className="bg-[#FDCFB1]/70 bubble p-4">
              <p className="text-xs">Hace referencia al significado de los tajos tribales y su conexión con tradiciones ancestrales. El interés por el santo patriarcado va más allá de lo que hace el servicio médico.</p>
              
              <div className="flex justify-center mt-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=150&h=150&fit=crop" 
                    alt="Dog profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <FriendsSection />
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFF4D6]/70 bubble p-4 flex">
              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-xs text-gray-500">you are the</span>
                <span className="text-xs text-gray-500">sunflower</span>
                <Button size="sm" className="rounded-full mt-2 bg-[#F3CA40] text-white border-none hover:bg-[#E6B800]">
                  <Icon name="Heart" size={14} className="mr-1" />
                  follow neiva
                </Button>
              </div>
              <div className="flex-1 text-right">
                <img 
                  src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=100&h=100&fit=crop" 
                  alt="Emoji icons" 
                  className="w-20 ml-auto"
                />
              </div>
            </div>
            
            <div className="bg-[#FFF4D6]/70 bubble p-4 flex flex-col h-64">
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
              </div>
              <div className="mt-auto flex justify-between text-xs text-gray-400">
                <span>@livetime</span>
                <span>07 OCT 2023</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-xs text-gray-400 mb-4">
          <p>take a chill vibe</p>
          <p>handmade</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
