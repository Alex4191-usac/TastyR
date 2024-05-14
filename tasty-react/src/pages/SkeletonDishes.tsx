import { Skeleton } from "@/components/ui/skeleton"




const SkeletonDishes: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-50 shadow-md rounded-lg p-4">
        <Skeleton className="w-full  bg-slate-300 h-48 object-cover rounded-lg pb-5" />
    </div>
  );
};

export default SkeletonDishes;