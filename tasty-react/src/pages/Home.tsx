import { useState } from "react";
import ListDishes from "@/components/lists/ListDishes"
import Filter from "@/components/ui/filter"
import Navbar from "@/components/ui/navbar";

export const Home = () => {
  const [selectedBadge, setSelectedBadge] = useState<string>('Beef');
  
  const handleBadgeClick = (badge: string) => {
    setSelectedBadge(badge);
  }
  
  return (
    <div className="min-w-screen">
      <Navbar />   
      <Filter onBadgeClick={handleBadgeClick} selectedBadge={selectedBadge}/>
      <h1 className="text-xl text-gray-500 font-semibold pl-5 mt-5">
        List of {selectedBadge} recepies :
      </h1>
      <ListDishes selectedBadge={selectedBadge} />
    </div>
  )
}
