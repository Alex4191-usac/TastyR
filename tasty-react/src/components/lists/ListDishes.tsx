import React, { useEffect, useState } from 'react';
import useDishes from '@/hooks/useDishes';
import DishItem from '../items/DishItem';
import Pagination from './ListPagination'; // Import the Pagination component

interface ListDishesProps {
  selectedBadge: string;
}

const ListDishes: React.FC<ListDishesProps> = ({ selectedBadge }) => {
  const dishes = useDishes(selectedBadge);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const pageRange = 3; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDishes = dishes?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = dishes ? Math.ceil(dishes.length / itemsPerPage) : 0;


  useEffect(() => { 
    setCurrentPage(1);
  }, [selectedBadge]);

  return (
    <section>
      <div className="p-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentDishes ? (
          currentDishes.map(dish => <DishItem key={dish.idMeal} dish={dish} />)
        ) : (
          'Loading...'
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        pageRange={pageRange}
      />
    </section>
  );
};

export default ListDishes;
