import { Badge } from "./badge"
import { GiNoodles, GiSheep, GiChicken, GiSadCrab, GiCakeSlice, GiCarrot, GiPig } from "react-icons/gi";
import { LuBeef, LuSoup  } from "react-icons/lu";




interface FilterProps {
  onBadgeClick: (badge: string) => void;
  selectedBadge: string;
}

const Filter: React.FC<FilterProps> = ({ onBadgeClick, selectedBadge }) => {
  const badgeOptions: string[] = [
    'Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter'
  ];

  const badgeIcons: any = {
    Beef: <LuBeef className="ml-2" />,
    Chicken: <GiChicken className="ml-2" />,
    Dessert: <GiCakeSlice className="ml-2" />,
    Lamb: <GiSheep className="ml-2" />,
    Pasta: <GiNoodles className="ml-2" />,
    Pork: <GiPig className="ml-2" />,
    Seafood: <GiSadCrab className="ml-2" />,
    Side: <GiCarrot className="ml-2" />,
    Starter: <LuSoup className="ml-2" />
  };

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3  py-5 px-8">
      {badgeOptions.map((badgeOption) => (
        <Badge
          key={badgeOption}
          variant={selectedBadge === badgeOption ? 'default' : 'secondary'}
          onClick={() => onBadgeClick(badgeOption)}
        >
          {badgeOption}
          {badgeIcons[badgeOption]}
        </Badge>
      ))}
    </div>
  );
}

export default Filter;