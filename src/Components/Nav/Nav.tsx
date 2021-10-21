import { FC } from "react";
import { Link } from 'react-router-dom'


const Nav: FC = () => {
    return ( 
        <div className=" nav bg-blue-400 w-screen h-14 flex justify-between">
            <div className="h-full w-1/4 p-4 font-sans font-semibold text-white">
                <p className="cursor-pointer">eWebShop</p>
            </div>
            <Link to="/cart">
                <div className="h-full w-1/4 p-4 flex justify-center items-center">
                    <button className=" fas fa-shopping-cart text-2xl text-white">
                    </button>
                </div>
            </Link>
        </div>
     );
}
 
export default Nav;