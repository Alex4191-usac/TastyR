import { Skeleton } from "@/components/ui/skeleton"




const SkeletonDishes: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-50 shadow-md rounded-lg p-4">
        <Skeleton className=" bg-slate-300  w-40 h-4 pb-2" />
        <Skeleton className="w-full  bg-slate-300 h-48 object-cover rounded-lg pb-5" />
      <div className="flex items-center justify-center">
        <Skeleton className="w-20 h-8  bg-slate-300" />
      </div>
    </div>
  );
};

export default SkeletonDishes;