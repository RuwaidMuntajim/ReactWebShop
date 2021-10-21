import { FC } from "react";
import Headphone from "../../Assets/headphone.jpeg"
interface CartItemProps {
    name: string,
    price: string,
    description?: string,
    key: string,
    removefromCart: (id: string) => void
}
 
const CartItem: FC<CartItemProps> = ({name, key, price, removefromCart}) => {
    return ( 
        <div className="cart-item flex flex-col shadow-md rounded-xl mb-3 bg-blue-50">
            <img src={Headphone} alt="headphone" className="object-none"/>
            <div>
                <p className="text-2xl font-semibold pl-3 py-3">{name}</p>
                <p>{price}</p>
            </div>
            <div className="flex justify-end">
                <button 
                onClick={() => removefromCart(key)}
                className="bg-blue-500 p-1 rounded-md hover:bg-blue-600 my-2 mr-2 text-white">Remove item</button>
            </div>
        </div>
     );
}
 
export default CartItem;