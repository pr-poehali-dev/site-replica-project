
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutMeSection = () => {
  return (
    <div className="bg-accent bubble p-5 max-w-xl space-y-3">
      <h2 className="font-semibold text-lg">Обо мне</h2>
      <p className="text-sm text-gray-700">
        Привет! Меня зовут Неля, я блогер и стример. Я обожаю подсолнухи и путешествия.
        Здесь вы можете узнать больше обо мне и моих увлечениях.
      </p>
      
      <div className="flex flex-wrap gap-2 pt-2">
        <Button variant="outline" className="bg-white rounded-full text-xs">
          <Icon name="Instagram" size={14} />
          моя лента
        </Button>
        <Button variant="outline" className="bg-white rounded-full text-xs">
          <Icon name="Heart" size={14} />
          подписаться
        </Button>
      </div>
    </div>
  );
};

export default AboutMeSection;
