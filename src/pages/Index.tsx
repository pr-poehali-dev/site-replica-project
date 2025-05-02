
import SearchBar from "@/components/SearchBar";
import ProfileSection from "@/components/ProfileSection";
import AboutMeSection from "@/components/AboutMeSection";
import SunflowerBrand from "@/components/SunflowerBrand";
import FriendsSection from "@/components/FriendsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-pastel-blue bubble p-5">
              <p className="text-sm mb-4">Неля, я рада что нравится мой блог, но пиратство и плагиат запрещены. Будь мамой, скажи им сначала у тебя спросить?</p>
              <SearchBar />
            </div>
          </div>
          <SunflowerBrand />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProfileSection 
            title="the sweetest girl" 
            subtitle="подсолнухи"
            imageSrc="https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400"
          />
          
          <AboutMeSection />
          
          <ProfileSection 
            title="приключения"
            subtitle="мой путь"
            imageSrc="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400"
          />
        </div>

        {/* Friends Section */}
        <FriendsSection />
        
        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© 2025 SUNFLOWER | Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
