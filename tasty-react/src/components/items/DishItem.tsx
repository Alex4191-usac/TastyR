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
    <div className="relative shadow-md rounded-lg overflow-hidden">
      <img
        src={dish.strMealThumb}
        alt={dish.strMeal}
        className="w-full h-52 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
        <div className="text-center">
            <h2 className="text-white font-bold pb-4">{dish.strMeal}</h2>
            <Link
            to={`/recipe/${dish.idMeal}`}
            className="bg-rose-500 text-white font-semibold px-3 py-1 mt-2 rounded-full"
            >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DishItem;

