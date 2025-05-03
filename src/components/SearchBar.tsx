
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="search-bubble max-w-md w-full">
      <Icon name="Search" className="text-gray-400 mr-2" size={18} />
      <Input 
        type="text" 
        placeholder="where can I find arabella's sunflowers?" 
        className="border-none shadow-none focus-visible:ring-0 bg-transparent p-0 h-8"
      />
    </div>
  );
};

export default SearchBar;
