import { PiCookingPotDuotone } from "react-icons/pi";

const EmptyFavorites: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <PiCookingPotDuotone className="text-rose-300 text-9xl mb-4"/>
            <p className=" text-lg font-semibold text-rose-300">"Uh-oh! It looks like you haven't added any recipes to your favorites yet.</p>
            <p className=" text-lg font-semibold text-rose-300"> Why not explore our delicious selection and start saving your favorites for later"</p>
        </div>
    );
};

export default EmptyFavorites;