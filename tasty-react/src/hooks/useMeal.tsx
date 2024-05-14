import { useState, useEffect } from 'react';
import Meal  from '../models/Meal';

const useMeal = (id: string): Meal | null => {
    const [meal, setMeal] = useState<Meal | null>(null);
    
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => setMeal(data.meals[0]))
        .catch(error => {
            console.error(error);
            setMeal(null);
        });
    }, [id]);
    
    return meal ;
}

export default useMeal;