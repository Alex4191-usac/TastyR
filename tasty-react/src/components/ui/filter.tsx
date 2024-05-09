import { Badge } from "./badge"

interface FilterProps {
  onBadgeClick: (badge: string) => void;
  selectedBadge: string;
}

const Filter: React.FC<FilterProps> = ({ onBadgeClick, selectedBadge }) => {
  const badgeOptions: string[] = [
    'Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter'
  ];

  return (
    <div className="w-full flex justify-center p-3">
      {badgeOptions.map((badgeOption) => (
        <Badge
          key={badgeOption}
          variant={selectedBadge === badgeOption ? 'default' : 'secondary'}
          onClick={() => onBadgeClick(badgeOption)}
        >
          {badgeOption}
        </Badge>
      ))}
    </div>
  );
}

export default Filter;