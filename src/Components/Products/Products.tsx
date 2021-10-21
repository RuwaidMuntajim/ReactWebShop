import { FC, useContext, useEffect } from "react";
import Product from "./Product";
import {productsContext, productObj} from "../../App";

interface productProp {
    addToCart: (id: string) => void;
}

const Products: FC<productProp> = ({addToCart}) => {

    const products = useContext<productObj[]>(productsContext);  


    useEffect(() => {
        console.log(products);
    }, [])

    return ( 
        <div className="container mx-auto">
            <div className="w-full h-12 flex flex-col justify-center font-semibold text-2xl">
                <h2 className="ml-4">Products to buy</h2>
                <hr className="ml-4" style={{border: '1px black solid', width: '60%'}}/>
            </div>
            <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 box-border gap-2 mx-3">
                {products.length > 0 && products.map(product => 
                    <Product 
                        name={product.name} 
                        description={product.description} 
                        imgURL={product.imgURL} 
                        id={product.id}
                        addToCart={addToCart}
                    />   
                )}
            </div>
        </div>
     );
}

export default Products;
