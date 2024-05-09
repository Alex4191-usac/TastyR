import { useState, useEffect } from 'react';
import Dish from '../models/Dish';


const useDishes = (category: string): Dish[] | null => {
  const [dishes, setDishes] = useState<Dish[] | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => setDishes(data.meals))
      .catch(error => console.error(error));
  }, [category]);

  return dishes;
}

export default useDishes;