import React, { useCallback, useEffect, useState } from "react";
import { add2Receipt } from "../reducers/receiptsSlice";
import { selectProducts, fetchProducts } from "../reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(selectProducts)

    const [category, setCategory] = useState([])

    const handleClick = useCallback(category => {
        setCategory(category);
    }, [])

    const filteredItems = products.filter(product => product.category === category)

    const dispatch = useDispatch()

    const addItem = (product) => {
        dispatch(add2Receipt(product));
    };

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <div className="categories">
                <div className="categories-header">
                    <h2>Categories</h2>
                </div>
                <div className="category-btns">
                    <button onClick={() => handleClick('Fruits')}>Fruits</button>
                    <button onClick={() => handleClick('Vegetables')}>Vegetables</button>
                    <button onClick={() => handleClick('Dairy')}>Dairy</button>
                    <button onClick={() => handleClick('Meat')}>Meats</button>
                    <button onClick={() => handleClick('Seafood')}>Seafood</button>
                    <button onClick={() => handleClick('Nuts and Grains')}>Nuts and Grains</button>
                    <button onClick={() => handleClick('Condiments')}>Condiments</button>
                </div>
                <div className="products">
                    {filteredItems.map(item => (
                        <>
                            <span key={item.id}>{
                                <button className="productBtn" key={item.name} onClick={() => { addItem(item) }}>
                                    {item.name}
                                </button>}
                            </span>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products