import { FC, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { cartObj } from '../../App';
import CartItem from './CartItem';

interface cartProp {
    cart: cartObj | null;
    removefromCart: (id: string) => void;
    emptyCart: () => void;
    getCart: () => Promise<void>;
} 



const Cart: FC<cartProp> = ({cart, removefromCart, emptyCart, getCart}) => {
    getCart()
    useEffect(() => {
        
        getCart();
    }, [])


    return ( 
        <div className="cart">
            <div className="flex justify-between">
                <div>
                    <p className="text-3xl font-semibold ml-4 my-2">My cart</p>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <button className="bg-blue-500 hover:bg-blue-600 p-1 px-2 rounded-md ml-4 my-1 text-white">Home</button>
                    </Link>
                </div>
                <div className="my-3 flex flex-col space-y-1 sm:block">
                    <button onClick={emptyCart} className="mx-1 ring-1 ring-blue-500 text-blue-500 p-1 rounded-md hover:bg-blue-500 hover:text-white">Empty Cart</button>
                    <button className="mx-1 bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600">Checkout</button>
                </div>
            </div>
            <div className="cart-items grid grid-cols-1 sm:grid-cols-3 gap-3 mx-3">
                {/*cart && cart. .map(product => 
                    <CartItem name={product.name} key={product.key}/>    
                )*/}
                {cart && cart.line_items.map(item => 
                    <CartItem 
                    key={item.id} 
                    name={item.name} 
                    price={item.price.formatted_with_symbol}
                    removefromCart={removefromCart}
                    />    
                )}
            </div>
        </div>
     );
}
 
export default Cart;
