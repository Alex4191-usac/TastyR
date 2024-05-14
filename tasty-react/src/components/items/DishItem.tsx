import { Link } from 'react-router-dom';

interface DishItemProps {
  dish: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
}

const DishItem: React.FC<DishItemProps> = ({ dish }) => {
  return (
    <div className="bg-slate-50 shadow-md rounded-lg p-3 ">
      <h3 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs">
        {dish.strMeal}
      </h3>
      <img
        src={dish.strMealThumb}
        alt={dish.strMeal}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex items-center justify-center">
        <Link
          to={`/recipe/${dish.idMeal}`}
          className="bg-rose-500 text-white font-semibold px-3 py-1 mt-2 rounded-full"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default DishItem;