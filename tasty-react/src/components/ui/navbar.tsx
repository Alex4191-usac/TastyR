
import { GrNotes } from "react-icons/gr";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="flex justify-between items-center bg-emerald-200  p-4">
            <h1 className="text-xl font-extrabold font-briem">Tasty Recepies</h1>
            <ul className="flex space-x-4">
                <li onClick={()=> navigate("/my-recipes")} className="text-gray-600 cursor-pointer">
                    <GrNotes className=" inline-block  mr-1 " />   
                   <p className=" inline-block  font-bold">My TastyList</p>               
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar