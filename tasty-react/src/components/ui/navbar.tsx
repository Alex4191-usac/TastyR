
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="flex justify-between items-center bg-emerald-50 p-4">
            <h1 className="text-xl font-extrabold font-briem">Tasty Recepies</h1>
            <ul className="flex space-x-4">
                <li onClick={()=> navigate("/my-recipes")} className="text-gray-600 cursor-pointer">
                    <FaHeart className=" inline-block  mr-1 " />   
                   <p className=" inline-block  font-bold">Favorites</p>               
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar