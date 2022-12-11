import React, { useCallback, useEffect, useState } from "react";
import { add2Receipt } from "../reducers/receiptsSlice";
import { selectProducts, fetchProducts } from "../reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(selectProducts)
    // console.log(products);

    // const [items, setItems] = useState([])
    const [category, setCategory] = useState([])

    const handleClick = useCallback(category => {
        setCategory(category);
    }, [])

    const filteredItems = products.filter(product => product.category === category)

    const dispatch = useDispatch()

    const addItem = (product) => {
        // console.log('Adding', product.name);
        dispatch(add2Receipt(product));
    };

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
        <div>
            <div className="categories">
                <div className="categories-header">
                    <h2>Categories</h2>
                </div>
            <div>
                    <button onClick={() => handleClick('Fruits')}>Fruits</button>
                    <button onClick={() => handleClick('Vegetables')}>Vegetables</button>
                    <button onClick={() => handleClick('Dairy')}>Dairy</button>
                    <button onClick={() => handleClick('Meat')}>Meats</button>
                    <button onClick={() => handleClick('Seafood')}>Seafood</button>
                    <button onClick={() => handleClick('Nuts and Grains')}>Nuts and Grains</button>
                    <button onClick={() => handleClick('Condiments')}>Condiments</button>

                    {filteredItems.map(item => (
                        <div key={item.id}>{<div className="products">
                       
                        <div className="product-buttons">
                            {/* {products.map((product) => ( */}
                            <button className="product-button" key={item.name} onClick={() => { addItem(item) }}>
                                        {item.name}
                            </button>
                            {/* ))} */}
                        </div>
                    </div>}</div>
                    ))}
            </div>
        </div>

        {/* return( */}

            {/* <div className="products">
                <div className="products-header">
                    <h2>Products</h2>
                </div>
                <div className="product-buttons">
                    {products.map((product) => (
                    <button className="product-button" key={product.name} onClick={() => { addItem(product) }}>
                                {product.name}
                    </button>
                    ))}
                </div>
            </div> */}
        </div>
        </>
    )
}

export default Products