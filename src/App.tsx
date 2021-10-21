import { createContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import { commerce } from './lib/commerce'

//interfaces
export interface productObj {
  name: string,
  description: string,
  imgURL: string,
  id: string,
  price: string,
}

export interface cartItemPriceObj {
  formatted: string,
  formatted_with_code: string,
  formatted_with_symbol: string,
}

interface cartItemObject {
  name: string,
  price: cartItemPriceObj,
  description?: string,
  id: string,
}


export interface cartObj {
  id: string,
  line_items: cartItemObject[],
  subtotal?: string,
  total_items: number,
  total_unique_items: number,
}

//product context
export const productsContext = createContext<productObj[]>([]);

function App() {

  //state variables
  const [products, setProducts] = useState<productObj[]>([]);
  const [cart, setCart] = useState<null | cartObj>(null);
  const [mainCart, setMainCart] = useState<null | object>(null);

  //function types

  let getProducts: () => Promise<void>
  let getCart: () => Promise<void>
  let addtoCart: (id: string) => void
  let removefromCart: (id: string) => void
  let emptyCart: () => void

  //function's functionality

  getProducts = async () => {
    const res = await commerce.products.list();
    res.data.forEach((product) => {
      products.push(
        {
          name: product.name, 
          description: product.description, 
          price: product.price.formatted_with_symbol, 
          id: product.id,
          imgURL: product.media.source
        }
      )
    })
    setProducts([...products]);
  }


  getCart = async() => {
    const cart1 = await commerce.cart.retrieve();
    setMainCart(cart1);
    
    setCart({
      id: cart1.id,
      line_items: cart1.line_items,
      subtotal: cart1.subtotal.formatted_with_symbol,
      total_items: cart1.total_items,
      total_unique_items: cart1.total_unique_items
    })
  }

  
  addtoCart = (id) => {
    commerce.cart.add(id, 1);  
  }

  
  removefromCart = (id) => {
    commerce.cart.remove(id);
  }
  
  
  emptyCart = () => {
    commerce.cart.empty()
  } 



  useEffect(() => {
    getProducts(); 
  }, [])


  return (
    <div className="App overflow-hidden overflow-x-hidden font-sans">
      <Nav/>
      <Switch>
        <productsContext.Provider value={products}>
          <Route exact path="/">
            <Products addToCart={addtoCart}/>
          </Route>
          <Route exact path="/cart">
            <Cart
            cart={cart}
            getCart={getCart} 
            removefromCart={removefromCart}
            emptyCart={emptyCart}
            />
          </Route>
        </productsContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
