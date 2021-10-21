import { FC } from "react";

interface ProductProps {
    name: string,
    description: string,
    imgURL: string,
    id: string,
    addToCart: (id: string) => void
}
 
const Product: FC<ProductProps> = ({id, name, description, imgURL, addToCart}) => {
    
    return ( 
        <div className="flex flex-col bg-blue-50 font-sans shadow-md rounded-xl" key={id}>
            <img src={imgURL} alt="" className="object-none"/>
            <div className="pl-3 py-3">
                <p className="text-2xl font-semibold">{name}</p>
                <p>{description.replace(/[<p></p>]/g, '')}</p>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={() => {addToCart(id)}} 
                    className="fas fa-shopping-cart pr-2 py-2 text-black text-xl"
                >
                </button>
            </div>
        </div>
     );
}
export default Product;
