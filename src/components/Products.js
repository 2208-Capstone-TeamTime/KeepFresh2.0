import React, {useEffect, useState} from "react";
import { add2Receipt } from "../reducers/receiptsSlice";
import { selectProducts, fetchProducts } from "../reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(selectProducts)
    console.log(products);

    const dispatch = useDispatch()

    const addItem = (product) => {
        console.log('Adding', product.name);
        dispatch(add2Receipt(product));
    };

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    
    return (
        <>
        <div className="products">
            <h2>Products</h2>
        </div>
        <div className="products">
            {products.map((product) => (
                <button key={product.name} onClick={() => {addItem(product)}}>
                    {product.name}
                </button>
            ))}
        </div>
        </>
    )
}

export default Products