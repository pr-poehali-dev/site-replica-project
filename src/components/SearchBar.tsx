
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="search-bubble max-w-md w-full">
      <div className="bg-[#F8F8F8] rounded-full p-1.5">
        <Icon name="Search" className="text-gray-400" size={18} />
      </div>
      <Input 
        type="text" 
        placeholder="where can I find arabella's sunflowers?" 
        className="border-none shadow-none focus-visible:ring-0 bg-transparent p-0 px-2 h-8 text-sm"
      />
    </div>
  );
};

export default SearchBar;
